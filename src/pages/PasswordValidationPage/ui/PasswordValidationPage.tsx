import React from 'react';
import { PageContainer } from '@shared/index';
import { PasswordValidation } from '@features/password-validation';
import { Box } from '@mui/material';

export const PasswordValidationPage: React.FC = () => {
  return (
    <PageContainer>
      <Box sx={{ p: 2 }}>
        <PasswordValidation />
      </Box>
    </PageContainer>
  );
};

