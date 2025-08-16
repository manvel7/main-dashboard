import { styled } from '@mui/material/styles';
import { Box, Card, CardContent } from '@mui/material';

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  background: theme.palette.login.background,
  minHeight: '100vh',
  padding: 0,
}));

export const LoginCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  borderRadius: theme.spacing(3),
  boxShadow: `0 8px 32px ${theme.palette.login.cardShadow}`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.login.cardBorder}`,
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 1), // 8px left and right padding on mobile
  },
}));

export const LoginCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
  '&:last-child': {
    paddingBottom: theme.spacing(4),
  },
}));

export const LoginHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: theme.palette.login.iconGradient,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  boxShadow: `0 4px 16px ${theme.palette.login.iconShadow}`,
}));

export const Icon = styled('div')(({ theme }) => ({
  fontSize: 32,
  color: 'white',
}));

export const Title = styled('h1')(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: theme.palette.login.titleGradient,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export const Subtitle = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  opacity: 0.8,
}));

export const AlertContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const Footer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const Link = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline',
  },
}));
