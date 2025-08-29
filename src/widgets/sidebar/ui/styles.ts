import { styled } from '@mui/material/styles';
import {
  Drawer,
  ListItemButton,
  IconButton,
  List,
  ListItem,
} from '@mui/material';

export const SIDEBAR_WIDTH = 200;
export const SIDEBAR_WIDTH_COLLAPSED = 50;

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRight: 'none',
    paddingTop: theme.spacing(1.2), // Align with main content padding
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden', // Hide horizontal scroll when collapsed
  },
}));

export const StyledList = styled(List)<{ component?: React.ElementType }>({
  padding: 0,
  margin: 0,
  flexGrow: 1, // Allow content to grow and push footer to bottom
  '& .MuiListItem-root': {
    padding: 0,
    margin: 0,
  },
});

export const StyledListItem = styled(ListItem)<{ selected?: boolean }>(
  ({ selected, theme }) => ({
    padding: 0,
    margin: 0,
    backgroundColor: selected ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    position: 'relative',
    '&:hover': {
      backgroundColor: selected
        ? 'rgba(255, 255, 255, 0.25)'
        : 'rgba(255, 255, 255, 0.1)',
    },
    '&::before': selected
      ? {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          backgroundColor: '#ffffff',
          zIndex: 1,
        }
      : {},
    [theme.breakpoints.down('sm')]: {
      '&::before': selected
        ? {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            backgroundColor: '#ffffff',
            zIndex: 1,
          }
        : {},
    },
  })
);

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  gap: theme.spacing(2), // 16px gap
  minHeight: 48, // Same height as header
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  width: '100%', // Take full width of the sidebar
  margin: 0, // Remove any margins
  borderRadius: 0, // Remove border radius to span full width
  backgroundColor: 'transparent', // Remove default background
  position: 'relative',
  '&:hover': {
    backgroundColor: 'transparent', // Let parent handle hover
  },
  // Mobile-specific enhancements
  [theme.breakpoints.down('sm')]: {
    minHeight: 56, // Slightly taller for better touch targets
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  // justifyContent will be controlled by the component based on open state
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#000000',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const SidebarHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 48, // Same height as navigation items
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const HeaderToggleButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  padding: theme.spacing(1.5), // Same padding as navigation items
  gap: theme.spacing(2), // Same gap as navigation items
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  width: '100%', // Take full width like navigation items
  // justifyContent will be controlled by the component based on open state
}));

export const SidebarFooter = styled('div')(({ theme }) => ({
  marginTop: 'auto', // Push footer to bottom
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.75rem',
  textAlign: 'center',
  lineHeight: 1.2,
}));
