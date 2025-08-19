import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Home as HomeIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { Layout } from '@widgets/layout';
import { SuspensePage } from '@shared/index';
import PrivateRoute from '@app/routes/PrivetRoutes';

// Home page
const HomePage = lazy(() =>
  import('@pages/HomePage').then((module) => ({ default: module.HomePage }))
);

// Auth pages
const LoginPage = lazy(() =>
  import('@pages/LoginPage').then((module) => ({ default: module.LoginPage }))
);

// User pages
const UserCardPage = lazy(() =>
  import('@pages/User/UserCardPage').then((module) => ({
    default: module.UserCardPage,
  }))
);
const UserCreatePage = lazy(() =>
  import('@pages/User/UserCreatePage').then((module) => ({
    default: module.UserCreatePage,
  }))
);

// Route paths as constants for type safety and easy imports
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  USERS: '/users',
  USERS_CARD: '/users/user-cards',
  CREATE_USER: '/users/user-create',
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
      {
        path: ROUTES.CREATE_USER,
        label: 'Create User',
        icon: <AddIcon />,
      },
    ],
  },
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
          {
            path: ROUTES.CREATE_USER,
            element: (
              <PrivateRoute>
                <SuspensePage>
                  <UserCreatePage />
                </SuspensePage>
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
];

// Create the router instance
export const router = createBrowserRouter(routes);

// Type for route paths
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
