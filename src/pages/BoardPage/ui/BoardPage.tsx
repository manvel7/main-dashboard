import React from 'react';
import { PageContainer } from '@shared/index';
import { Board } from '@features/board';
import { Box } from '@mui/material';

export const BoardPage: React.FC = () => {
  return (
    <PageContainer>
      <Box sx={{ p: 2 }}>
        <Board />
      </Box>
    </PageContainer>
  );
};

