import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const CarouselRoot = styled(Box)<{ $height?: number | string }>(({ $height }) => ({
  position: "relative",
  overflow: "hidden",
  height: $height ?? 300,
}));

export const Track = styled(Box)<{ $widthPercent: number; $translatePercent: number }>(
  ({ $widthPercent, $translatePercent }) => ({
    display: "flex",
    width: `${$widthPercent}%`,
    transform: `translateX(-${$translatePercent}%)`,
    transition: "transform 0.5s ease-in-out",
    height: "100%",
  })
);

export const Slide = styled(Box)<{ $basisPercent: number }>(({ $basisPercent }) => ({
  flex: `0 0 ${$basisPercent}%`,
  paddingLeft: 8,
  paddingRight: 8,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "#fff",
  width: 50,
  height: 50,
  zIndex: 2,
  "& svg": { fontSize: 32 },
  "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
}));

export const ArrowLeft = styled(ArrowButton)({ left: 8 });
export const ArrowRight = styled(ArrowButton)({ right: 8 });

export const DotsWrapper = styled(Box)({
  position: "absolute",
  bottom: 8,
  left: "50%",
  transform: "translateX(-50%)",
  background: "transparent",
});


