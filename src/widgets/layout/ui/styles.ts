import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // On mobile, content should not be pushed aside by sidebar
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: 0,
  },
}));
