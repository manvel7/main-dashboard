import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';


export const useSidebarClose = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Use custom hook for sidebar closing on mobile

  const onSidebarToggle = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  return {
    sidebarOpen,
    onSidebarToggle,
    isMobile,
  };
};
