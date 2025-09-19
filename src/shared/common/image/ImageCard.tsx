import {
  Box,
  Button,
  Typography,
  LinearProgress,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const ImageWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[2],
  "&:hover .delete-btn": {
    opacity: 1,
  },
}));

const DeleteButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 8,
  right: 8,
  opacity: 0,
  transition: "opacity 0.3s",
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  "&:hover": {
    background: "rgba(0,0,0,0.7)",
  },
}));

interface ImageCardProps {
  img: any;
  idx: number;
  removeImage: (idx: number, removeProgress: boolean) => void;
  removeProgress: () => void;
  uploadFile: (file: File) => void;
  uploading: Record<string, boolean>;
  progress: Record<string, number>;
}

export default function ImageCard({
  img,
  idx,
  removeImage,
  removeProgress,
  uploadFile,
  uploading,
  progress,
}: ImageCardProps) {
  return (
    <ImageWrapper>
      <img
        src={img.preview}
        alt={img.file.name}
        style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }}
      />
      <DeleteButton
        className="delete-btn"
        size="small"
        onClick={() => { }}
      >
        <DeleteIcon fontSize="small" />
      </DeleteButton>
      <Box sx={{ p: 1 }}>
        <Typography variant="caption" noWrap title={img.file.name}>
          {img.file.name}
        </Typography>

        {!uploading[img.file.name] && !progress[img.file.name] && (
          <Button size="small" onClick={() => uploadFile(img.file)}>
            Upload
          </Button>
        )}

        {uploading[img.file.name] && (
          <LinearProgress
            variant="determinate"
            value={progress[img.file.name] || 0}
          />
        )}
      </Box>
    </ImageWrapper>
  );
}
