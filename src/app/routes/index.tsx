import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  // People as UsersIcon,
  // Settings as SettingsIcon,
  Home as HomeIcon,
  // AccountBalanceWallet,
} from '@mui/icons-material';
import { Layout } from '@widgets/layout';
import { HomePage, DashboardPage } from '@pages';
import { SuspensePage } from '@shared/ui';

// Route paths as constants for type safety and easy imports
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  // USERS: '/users',
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
    path: ROUTES.DASHBOARD,
    label: 'Dashboard',
    icon: <DashboardIcon />,
  },
  // {
  //   path: ROUTES.USERS,
  //   label: 'Users',
  //   icon: <UsersIcon />,
  // },
  // {
  //   path: ROUTES.SETTINGS,
  //   label: 'Settings',
  //   icon: <SettingsIcon />,
  //   children: [
  //     {
  //       path: ROUTES.SETTINGS_SUBSCRIPTIONS,
  //       label: 'Subscriptions',
  //       icon: <AccountBalanceWallet />,
  //     },
  //   ],
  // },
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
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspensePage>
            <HomePage />
          </SuspensePage>
        ),
      },
      {
        path: ROUTES.DASHBOARD,
        element: (
          <SuspensePage>
            <DashboardPage />
          </SuspensePage>
        ),
      },
      // {
      //   path: ROUTES.USERS,
      //   element: (
      //     <SuspensePage>
      //       <UsersPage />
      //     </SuspensePage>
      //   ),
      // },
      // {
      //   path: ROUTES.SETTINGS,
      //   element: (
      //     <SuspensePage>
      //       <SettingsPage />
      //     </SuspensePage>
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
      //         <SuspensePage>
      //           <SubscriptionsPage />
      //         </SuspensePage>
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
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
