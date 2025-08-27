import React, { memo } from 'react';
import {
  Drawer,
  DrawerProps,
  Box,
  Typography,
  IconButton,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface NotificationDrawerMethods {
  closeDrawer: () => void;
}

export interface NotificationDrawerProps extends Omit<DrawerProps, 'children'> {
  open: boolean;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  children: (methods: NotificationDrawerMethods) => React.ReactNode;
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    maxWidth: '500px',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: theme.zIndex.drawer,
    boxShadow: theme.shadows[8],
    border: 'none',
    borderRadius: 0,
    // Mobile optimizations
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      width: '100%',
    },
  },
}));

const DrawerHeaderWrapper = styled(Box)(({ theme }) => ({
  minHeight: 64,
  flexShrink: 0,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    minHeight: 56, // Slightly smaller on mobile
  },
}));

const DrawerTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem', // Slightly smaller on mobile
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  minHeight: 64,
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    minHeight: 56,
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  // Use global scroll styling
  '&.custom-scrollbar': {
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.mode === 'dark' ? '#888' : '#ccc'} transparent`,
  },
  // Mobile optimizations
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    // Better scrolling on mobile
    WebkitOverflowScrolling: 'touch',
    // Hide scrollbar on mobile for cleaner look
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      width: '0px',
      background: 'transparent',
    },
  },
  // Smooth scroll behavior
  scrollBehavior: 'smooth',
  // Custom scroll snap for better UX
  scrollSnapType: 'y proximity',
  '& > *': {
    scrollSnapAlign: 'start',
  },
}));

const DrawerFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  flexShrink: 0,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

function NotificationDrawer({
  open,
  onClose,
  title = 'Notifications',
  footer,
  children,
  anchor = 'right',
  header,
  ...drawerProps
}: NotificationDrawerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    onClose();
  };

  const methods: NotificationDrawerMethods = {
    closeDrawer: handleClose,
  };

  return (
    <StyledDrawer
      anchor={anchor}
      open={open}
      onClose={handleClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      {...drawerProps}
    >
      <DrawerHeaderWrapper>
        <DrawerHeader>
          <DrawerTitle variant="h6">{title}</DrawerTitle>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            size={isMobile ? 'medium' : 'small'}
            sx={{
              // Better touch target on mobile
              [theme.breakpoints.down('sm')]: {
                minWidth: 44,
                minHeight: 44,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        {header && <>{header}</>}
      </DrawerHeaderWrapper>

      <DrawerContent className="custom-scrollbar">
        {children(methods)}
      </DrawerContent>

      {footer && <DrawerFooter>{footer}</DrawerFooter>}
    </StyledDrawer>
  );
}

export default memo(NotificationDrawer);
