import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledPasswordValidationContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const StyledRulesContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '16px',
});

export const StyledValidationRule = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.2s ease-in-out',
  minHeight: '24px',
});

