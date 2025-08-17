import { createBrowserRouter, Outlet } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  // Settings as SettingsIcon,
  Home as HomeIcon,
  // AccountBalanceWallet,
} from '@mui/icons-material';
import { Layout } from '@widgets/layout';
import { SuspensePage } from '@shared/index';
import PrivateRoute from '@app/routes/PrivetRoutes';
import { lazy } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() =>
  import('@pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const UserCardPage = lazy(() =>
  import('@pages/User/UserCardPage').then((module) => ({
    default: module.UserCardPage,
  }))
);
const LoginPage = lazy(() =>
  import('@pages/LoginPage').then((module) => ({ default: module.LoginPage }))
);

// Route paths as constants for type safety and easy imports
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  USERS: '/users',
  USERS_CARD: '/users/user-cards',
  // SETTINGS: '/settings',
  // SETTINGS_SUBSCRIPTIONS: '/settings/subscriptions',
} as const;

// Navigation items for sidebar (routes with labels and icons)
export const navigationRoutes = [
  {
    path: ROUTES.HOME,
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: ROUTES.USERS,
    label: 'Users',
    icon: <UsersIcon />,
    children: [
      {
        path: ROUTES.USERS_CARD,
        label: 'User Cards',
        icon: <DashboardIcon />,
      },
    ],
  },
  // Route labels are plain strings used as i18n keys
];

// Root layout component
const RootLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

// Route definitions for the main dashboard application
export const routes = [
  {
    path: ROUTES.LOGIN,
    element: (
      <SuspensePage>
        <LoginPage />
      </SuspensePage>
    ),
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <SuspensePage>
              <HomePage />
            </SuspensePage>
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.USERS,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <SuspensePage>
                  <UserCardPage />
                </SuspensePage>
              </PrivateRoute>
            ),
          },
          {
            path: ROUTES.USERS_CARD,
            element: (
              <PrivateRoute>
                <SuspensePage>
                  <UserCardPage />
                </SuspensePage>
              </PrivateRoute>
            ),
          },
        ],
      },
      // {
      //   path: ROUTES.USERS,
      //   element: (
      //     <Suspense fallback={<LoadingSpinner />}>
      //       <UsersPage />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: ROUTES.SETTINGS,
      //   element: (
      //     <Suspense fallback={<LoadingSpinner />}>
      //       <SettingsPage />
      //     </Suspense>
      //   ),
      //   children: [
      //     {
      //       index: true,
      //       element: (
      //         <Box sx={{ mt: 2 }}>
      //           <h2>Settings Overview</h2>
      //           <p>Select a settings category from the sidebar.</p>
      //         </Box>
      //       ),
      //     },
      //     {
      //       path: 'subscriptions',
      //       element: (
      //         <Suspense fallback={<LoadingSpinner />}>
      //           <SubscriptionsPage />
      //         </Suspense>
      //       ),
      //     },
      //   ],
      // },
    ],
  },
];

// Create the router instance
export const router = createBrowserRouter(routes);

// Type for route paths
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
