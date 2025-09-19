import { Grid } from "@mui/material";
import ImageCard from "@shared/common/image/ImageCard";

interface ImageGridProps {
  images: any[];
  removeImage: (idx: number, removeProgress: boolean) => void;
  removeProgress: () => void;
  uploadFile: (file: File) => void;
  uploading: Record<string, boolean>;
  progress: Record<string, number>;
}

export default function ImageGrid({
  images,
  removeImage,
  removeProgress,
  uploadFile,
  uploading,
  progress,
}: ImageGridProps) {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {images.map((img, idx) => (
        <Grid key={idx} size={{ xs: 6, sm: 4, md: 3 }}>
          <ImageCard
            img={img}
            idx={idx}
            removeImage={removeImage}
            removeProgress={() => { }}
            uploadFile={uploadFile}
            uploading={uploading}
            progress={progress}
          />
        </Grid>
      ))}
    </Grid>
  );
}
