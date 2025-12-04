import React from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";

interface CommonStepperProps {
  steps: { label: string; component: React.ReactNode }[];
  activeStep: number;
}
export function CommonStepper({
  steps,
  activeStep,
}: CommonStepperProps) {
  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4}>{steps[activeStep].component}</Box>
    </>
  );
}
