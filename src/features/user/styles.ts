import { styled } from '@mui/material/styles';
import { Box, Card, Avatar } from '@mui/material';

export const UserCardContainer = styled(Card)(({ theme }) => ({
  background: '#282c34',
  borderRadius: 12,
  padding: 0,
  width: '100%',
  minHeight: 320,
  position: 'relative',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

export const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 120,
  overflow: 'hidden',
  borderRadius: '12px 12px 0 0',
}));

export const BannerGradient = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'gradientIndex',
})<{ gradientIndex: number }>(({ theme, gradientIndex }) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  ];

  return {
    width: '100%',
    height: '100%',
    background: gradients[gradientIndex % gradients.length],
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.1)',
      pointerEvents: 'none',
    },
  };
});

export const AvatarContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 80,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  border: '4px solid #282c34',
  background: theme.palette.primary.main,
  fontSize: '2rem',
  fontWeight: 600,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

export const UserInfoContainer = styled(Box)(({ theme }) => ({
  marginTop: 50,
  textAlign: 'center',
  padding: theme.spacing(0, 2),
}));

export const UserName = styled('h3')(({ theme }) => ({
  color: '#ffffff',
  fontSize: 18,
  fontWeight: 600,
  margin: '0 0 4px 0',
  lineHeight: 1.2,
}));

export const UserRole = styled('p')(({ theme }) => ({
  color: '#9ca3af',
  fontSize: 14,
  margin: 0,
  lineHeight: 1.2,
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: 12,
  margin: '16px 0',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    gap: 8,
  },
}));

export const SocialIcon = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: 6,
  textDecoration: 'none',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '& svg': {
    width: 16,
    height: 16,
  },
  [theme.breakpoints.down('sm')]: {
    width: 28,
    height: 28,
    '& svg': {
      width: 14,
      height: 14,
    },
  },
}));

export const FacebookIcon = styled(SocialIcon)({
  background: '#1877f2',
  color: 'white',
});

export const InstagramIcon = styled(SocialIcon)({
  background:
    'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  color: 'white',
});

export const LinkedInIcon = styled(SocialIcon)({
  background: '#0077b5',
  color: 'white',
});

export const TwitterIcon = styled(SocialIcon)({
  background: '#000000',
  color: 'white',
});

export const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: theme.spacing(2),
  borderTop: '1px solid #374151',
  marginTop: 'auto',
}));

export const StatItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const StatValue = styled('span')(({ theme }) => ({
  color: '#ffffff',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.2,
}));

export const StatLabel = styled('span')(({ theme }) => ({
  color: '#9ca3af',
  fontSize: 12,
  marginTop: 2,
  lineHeight: 1.2,
}));

// Container styles for the grid layout
export const UsersCardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  minHeight: '100vh',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const UsersCardGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
  maxWidth: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
}));

export const LoadingSpinner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  color: '#ffffff',
  fontSize: 18,
}));

export const ErrorMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  color: '#ef4444',
  fontSize: 18,
  textAlign: 'center',
}));

export const UserCreateFormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));
