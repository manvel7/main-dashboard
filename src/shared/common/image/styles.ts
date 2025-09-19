import { styled, IconButton, Box } from "@mui/material";

export const DropArea = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: theme.palette.background.paper,
  transition: "border-color 0.3s ease",
  ":hover": {
    borderColor: theme.palette.primary.main,
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  ".delete-btn": {
    opacity: 0,
    transition: "opacity 0.3s ease",
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  ":hover .delete-btn": {
    opacity: 1,
  },
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ":hover": {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
}));
