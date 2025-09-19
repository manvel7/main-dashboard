import React from 'react';
import { Box, Typography, Grid, Button, LinearProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  DropArea,
  ImageWrapper,
  DeleteButton,
} from '@shared/common/image/styles';
import { useImageDropzone } from '@shared/common/image/hooks/useImageDropzone';
import ImageGrid from './ImageGrid';

export type ImageFile = {
  file: File;
  preview: string;
};

type Props = {
  multiple?: boolean;
  maxFiles?: number;
  maxSizeBytes?: number;
  onFilesChange?: (files: File[]) => void;
};

export default function ImageDropzone(props: Props) {
  const {
    images,
    inputRef,
    progress,
    uploading,
    handleDrop,
    handleDragOver,
    openFileDialog,
    handleInputChange,
    removeImage,
    uploadFile,
    removeProgress,
  } = useImageDropzone(props);

  return (
    <Box>
      <DropArea
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={openFileDialog}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={props.multiple}
          style={{ display: 'none' }}
          onChange={handleInputChange}
        />

        <CloudUploadIcon sx={{ fontSize: 48, mb: 1 }} />
        <Typography variant="h6">
          Drag & drop images here, or click to select
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Max files: ${props.maxFiles ?? 5} • Max size: ${(
            (props.maxSizeBytes ?? 5 * 1024 * 1024) /
            (1024 * 1024)
          ).toFixed(1)} MB`}
        </Typography>
      </DropArea>

      <ImageGrid
        images={images}
        removeImage={() => {}}
        removeProgress={() => {}}
        uploadFile={uploadFile}
        uploading={uploading}
        progress={progress}
      />
    </Box>
  );
}
