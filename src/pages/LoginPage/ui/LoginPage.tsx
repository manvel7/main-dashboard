import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { styles } from './styles';
import LoginForm from '@features/auth/ui/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent sx={styles.cardContent}>
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};
