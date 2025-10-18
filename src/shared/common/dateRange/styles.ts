import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: 8,
  margin: theme.spacing(3),
}));

export const Header = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  minWidth: 200,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export const SidebarTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  fontWeight: 600,
}));

export const SidebarItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: theme.spacing(1.5, 2),
  cursor: 'pointer',
  transition: 'background-color 0.2s, color 0.2s',
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: active
      ? theme.palette.primary.dark
      : theme.palette.grey[200],
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  position: 'relative',
}));

export const Footer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: 'right',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
}));
