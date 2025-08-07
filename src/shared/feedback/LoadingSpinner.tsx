import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface LoadingSpinnerProps {
  size?: number;
  minHeight?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  minHeight = '60vh'
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight,
        gap: 2,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};