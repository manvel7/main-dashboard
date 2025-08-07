import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const FeatureGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '16px',
  padding: theme.spacing(3, 0),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '12px',
    padding: theme.spacing(2, 0),
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  },
}));

export const FeatureCardWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.light,
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  margin: '0 auto 16px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  color: theme.palette.primary.contrastText,

  [theme.breakpoints.down('sm')]: {
    width: 56,
    height: 56,
    marginBottom: theme.spacing(1.5),
  },
}));
