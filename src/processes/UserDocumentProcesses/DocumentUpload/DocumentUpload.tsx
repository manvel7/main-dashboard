import ImageDropzone from "@/shared/common/image/ImageDropzone";


import { FieldValues, UseFormReset } from "react-hook-form";

export interface IDocumentUpload<T extends FieldValues = any> {
  reset: UseFormReset<T>;
  getValues: () => T
}


export function DocumentUpload({ reset, getValues }: IDocumentUpload) {

  const handleFileChange = (files: File[]) => {
    const selectedFile = files[0] || null;
    reset({
      ...getValues(),
      documentImage: selectedFile

    })
  };

  return (
    <>
      <ImageDropzone
        multiple
        maxFiles={5}
        maxSizeBytes={5 * 1024 * 4080}
        onFilesChange={handleFileChange}
      />
    </>
  );
}
