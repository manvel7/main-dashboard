import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import Cookies from 'js-cookie';

interface UseSidebarProps {
  open?: boolean;
  onToggle?: () => void;
}

// Utility function to check if a route is active (only exact matches)
export const isRouteActive = (
  routePath: string,
  currentPath: string
): boolean => {
  // Only exact match - no parent route activation
  return routePath === currentPath;
};

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

  // Auto-expand parent routes when child routes are active
  useEffect(() => {
    const findParentRoutes = (routes: any[], currentPath: string): string[] => {
      const parentPaths: string[] = [];

      const traverse = (routeList: any[]) => {
        for (const route of routeList) {
          if (route.children) {
            // Check if any child route is active
            const hasActiveChild = route.children.some((child: any) =>
              isRouteActive(child.path, currentPath)
            );

            if (hasActiveChild) {
              parentPaths.push(route.path);
            }

            traverse(route.children);
          }
        }
      };

      traverse(routes);
      return parentPaths;
    };

    // Import navigationRoutes dynamically to avoid circular dependency
    import('@app/routes').then(({ navigationRoutes }) => {
      const parentRoutes = findParentRoutes(
        navigationRoutes,
        location.pathname
      );
      setExpandedItems((prev) => {
        const newExpanded = [...prev];
        parentRoutes.forEach((path) => {
          if (!newExpanded.includes(path)) {
            newExpanded.push(path);
          }
        });
        return newExpanded;
      });
    });
  }, [location.pathname]);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const onSidebarToggle = useCallback(() => {
    if (controlledOpen !== undefined) {
      // Controlled mode: delegate to parent if provided in component via prop
      // The Sidebar component will receive onToggle and call it; here we only expose a no-op to keep the API consistent
      // Consumers using the hook directly in uncontrolled mode will toggle internal state
    } else {
      setInternalOpen((prev) => !prev);
    }
  }, [controlledOpen]);

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
    isRouteActive: (routePath: string) =>
      isRouteActive(routePath, location.pathname),
    onSidebarToggle,
  };
};
