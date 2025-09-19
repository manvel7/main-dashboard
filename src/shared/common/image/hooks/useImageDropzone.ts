import { useState, useRef, useCallback, useEffect } from "react";
import { useFileUpload } from "@shared/common/image/hooks/useFileUpload";
import { ImageFile } from "@shared/common/image/ImageDropzone";

type Props = {
  multiple?: boolean;
  maxFiles?: number;
  maxSizeBytes?: number;
  onFilesChange?: (files: File[]) => void;
};

export function useImageDropzone({
  multiple = true,
  maxFiles = 5,
  maxSizeBytes = 5 * 1024 * 1024,
  onFilesChange,
}: Props) {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { progress, uploading, uploadFile, removeProgress } = useFileUpload();

  const makePreview = (file: File) => URL.createObjectURL(file);
  const clearObjectURLs = (items: ImageFile[]) => items.forEach((i) => URL.revokeObjectURL(i.preview));

  const handleFiles = useCallback(
    (filesList: FileList | null) => {
      if (!filesList) return;
      const files = Array.from(filesList);

      const imageFiles = files.filter((f) => f.type.startsWith("image/"));
      if (imageFiles.length !== files.length) setError("Only image files are allowed.");

      const tooLarge = imageFiles.find((f) => f.size > maxSizeBytes);
      if (tooLarge) setError(`File \"${tooLarge.name}\" is larger than ${(maxSizeBytes / (1024 * 1024)).toFixed(1)} MB.`);

      const canAccept = Math.max(0, maxFiles - images.length);
      const toAdd = imageFiles.slice(0, canAccept);
      const newItems = toAdd.map((f) => ({ file: f, preview: makePreview(f) }));

      if (newItems.length === 0) return;
      const next = [...images, ...newItems];
      setImages(next);
      onFilesChange?.(next.map((i) => i.file));
    },
    [images, maxFiles, maxSizeBytes, onFilesChange]
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  };

  const openFileDialog = () => inputRef.current?.click();

  const removeImage = (index: number, removeProgressFn: (name: string) => void) => {
    const removed = images[index];
    const next = images.filter((_, i) => i !== index);
    URL.revokeObjectURL(removed.preview);
    setImages(next);
    onFilesChange?.(next.map((i) => i.file));
    removeProgressFn(removed.file.name);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.currentTarget.value = "";
  };

  const handleCloseError = () => setError(null);

  useEffect(() => () => clearObjectURLs(images), []);

  return {
    images,
    error,
    inputRef,
    progress,
    uploading,
    handleDrop,
    handleDragOver,
    openFileDialog,
    handleInputChange,
    removeImage,
    handleCloseError,
    uploadFile,
    removeProgress,
  };
}
