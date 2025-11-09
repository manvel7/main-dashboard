import { CheckCircle, Cancel } from '@mui/icons-material';
import { Theme } from '@mui/material';

export interface ValidationRuleState {
  color: string;
  Icon: typeof CheckCircle | typeof Cancel;
}

export const getValidationRuleState = (
  isTouched: boolean,
  isValid: boolean,
  theme: Theme
): ValidationRuleState => {
  
  if (!isTouched) {
    return {
      color: theme.palette.text.secondary,
      Icon: CheckCircle,
    };
  }

  if (isValid) {
    return {
      color: theme.palette.success.main,
      Icon: CheckCircle,
    };
  }

  return {
    color: theme.palette.error.main,
    Icon: Cancel,
  };
};

