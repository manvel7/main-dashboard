import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import Cookies from 'js-cookie';

interface UseSidebarProps {
  open?: boolean;
  onToggle?: () => void;
}

export const useSidebar = ({ open: controlledOpen }: UseSidebarProps = {}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const [internalOpen, setInternalOpen] = useState(!isMobile); // Start open on desktop, closed on mobile
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Automatically handle sidebar state based on screen size
  useEffect(() => {
    if (controlledOpen === undefined) {
      setInternalOpen(!isMobile);
    }
  }, [isMobile, controlledOpen]);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleNavigate = useCallback(
    (path: string) => {
      navigate(path);
      // On mobile, navigation doesn't affect sidebar state since it auto-manages
    },
    [navigate]
  );

  const handleExpandClick = useCallback((path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path)
        ? prev.filter((item) => item !== path)
        : [...prev, path]
    );
  }, []);

  const handleLogout = useCallback(() => {
    Cookies.remove('token');
    Cookies.remove('i18next');
    localStorage.removeItem('i18nextLng');
    navigate('/login');
  }, [navigate]);

  return {
    isOpen,
    isMobile,
    location,
    expandedItems,
    handleNavigate,
    handleExpandClick,
    handleLogout,
  };
};
