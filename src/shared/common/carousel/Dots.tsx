import React from "react";
import { MobileStepper } from "@mui/material";
import { DotsWrapper } from "./styles";

interface DotsProps {
  steps: number;
  activeStep: number;
  show?: boolean;
}

export const Dots: React.FC<DotsProps> = ({ steps, activeStep, show = true }) => {
  if (!show) return null;
  return (
    <DotsWrapper>
      <MobileStepper steps={steps} position="static" activeStep={activeStep} nextButton={<></>} backButton={<></>} sx={{ background: "transparent" }} />
    </DotsWrapper>
  );
};

export default Dots;


