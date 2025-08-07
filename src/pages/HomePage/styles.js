import { styled } from '@mui/material/styles';
import { Box, Paper, Container } from '@mui/material';

export const HomeContainer = styled(Container)(({ theme }) => ({
  // maxWidth: '1200px',
  margin: '0 auto',
}));

export const WelcomeSection = styled(Paper)(({ theme }) => ({
  padding: '16px',
  marginBottom: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  boxShadow: '0 8px 32px rgba(25, 118, 210, 0.2)',
}));




