import { useState } from "react";

export function useStepper(totalSteps: number, initialStep = 0) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const next = () => {
    setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  };

  const back = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < totalSteps) setActiveStep(index);
  };

  const reset = () => setActiveStep(0);

  return { activeStep, next, back, goTo, reset };
}
