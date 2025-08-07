import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3, 2),
  transition: theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    marginLeft: 0,
  },
}));
