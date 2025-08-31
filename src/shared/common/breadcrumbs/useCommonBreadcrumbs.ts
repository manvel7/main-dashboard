import { navigationRoutes } from '@/app/routes';
import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// Utility function for prettifying segment names
function prettify(segment: string) {
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const useCommonBreadcrumbs = () => {
  const location = useLocation();

  const prettifyCallback = useCallback(
    (segment: string): string => prettify(segment),
    []
  );

  // Build a map: path -> hasChildren
  const routeMap = useMemo(() => {
    const map = new Map<string, boolean>();

    const processRoutes = (routes: typeof navigationRoutes) => {
      routes.forEach((route) => {
        if (route.path) {
          const hasChildren = !!(route.children && route.children.length > 0);
          map.set(route.path.toLowerCase(), hasChildren);

          if (route.children) {
            processRoutes(route.children);
          }
        }
      });
    };

    processRoutes(navigationRoutes);
    return map;
  }, []);

  // Determines if breadcrumb should be clickable
  const isClickable = useCallback(
    (routePath: string) => !(routeMap.get(routePath.toLowerCase()) ?? false),
    [routeMap]
  );

  // Compute breadcrumbs
  const breadcrumbs = useMemo(() => {
    const pathnames = location.pathname.split('/').filter(Boolean);

    return pathnames.map((segment, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const last = index === pathnames.length - 1;

      return {
        label: prettifyCallback(segment),
        path,
        isLast: last,
        clickable: !last ? isClickable(path) : false, // last breadcrumb never clickable
      };
    });
  }, [location.pathname, prettifyCallback, isClickable]);

  return { breadcrumbs };
};

export default useCommonBreadcrumbs;
