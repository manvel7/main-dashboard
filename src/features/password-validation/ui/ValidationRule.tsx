import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { StyledValidationRule } from '../styles';
import { getValidationRuleState } from '../helpers/getValidationRuleState';

interface ValidationRuleProps {
  label: string;
  isValid: boolean;
  isTouched: boolean;
}

export const ValidationRule: React.FC<ValidationRuleProps> = ({
  label,
  isValid,
  isTouched,
}) => {
  const theme = useTheme();
  const { color, Icon } = getValidationRuleState(isTouched, isValid, theme);

  return (
    <StyledValidationRule>
      <Icon fontSize="small" sx={{ color, flexShrink: 0 }} />
      <Typography variant="body2" sx={{ color, fontSize: '0.875rem', marginLeft: 1 }}>
        {label}
      </Typography>
    </StyledValidationRule>
  );
};
