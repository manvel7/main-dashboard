import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Home as HomeIcon,
  Add as AddIcon,
  List as ChecklistIcon,
  ViewKanban as BoardIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { Layout } from '@widgets/layout';
import { SuspensePage } from '@shared/index';
import PrivateRoute from '@app/routes/PrivetRoutes';
import { CategoryOutlined } from '@mui/icons-material';

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

const InfiniteScrollPage = lazy(() =>
  import('@pages/PostPage/ui/InfinityPostPage').then((module) => ({
    default: module.InfiniteScrollPage,
  }))
);

const CategoryScrollProductList = lazy(() =>
  import('@/pages/ProductsPage/ui/CategoryScrollProductList').then(
    (module) => ({
      default: module.default,
    })
  )
);

const BoardPage = lazy(() =>
  import('@pages/BoardPage').then((module) => ({ default: module.BoardPage }))
);

const PasswordValidationPage = lazy(() =>
  import('@pages/PasswordValidationPage').then((module) => ({
    default: module.PasswordValidationPage,
  }))
);

// Route paths as constants for type safety and easy imports
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  USERS: '/users',
  USER_CARD: '/users/user-card',
  CREATE_USER: '/create-user',
  POSTS: '/posts',
  PRODUCTS: '/products',
  BOARD: '/board',
  PASSWORD_VALIDATION: '/password-validation',
} as const;

// Type for navigation items
export type NavigationItem = {
  path: string;
  label: string;
  icon: React.ReactElement;
  children?: NavigationItem[];
};

// Navigation items for sidebar (routes with labels and icons)
export const navigationRoutes: NavigationItem[] = [
  {
    path: ROUTES.HOME,
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: ROUTES.USERS,
    label: 'Users',
    icon: <UsersIcon />,
    // children: [
    //   {
    //     path: ROUTES.USER_CARD,
    //     label: 'User Cards',
    //     icon: <DashboardIcon />,
    //   },
    // ],
  },
  {
    path: ROUTES.CREATE_USER,
    label: 'Create User',
    icon: <AddIcon />,
  },
  {
    path: ROUTES.POSTS,
    label: 'Posts List',
    icon: <ChecklistIcon />,
  },
  {
    path: ROUTES.PRODUCTS,
    label: 'Products',
    icon: <CategoryOutlined />,
  },
  {
    path: ROUTES.BOARD,
    label: 'Board',
    icon: <BoardIcon />,
  },
  {
    path: ROUTES.PASSWORD_VALIDATION,
    label: 'Password Validation',
    icon: <LockIcon />,
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
            path: ROUTES.USER_CARD,
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
      {
        path: ROUTES.POSTS,
        element: (
          <PrivateRoute>
            <SuspensePage>
              <InfiniteScrollPage />
            </SuspensePage>
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.PRODUCTS,
        element: (
          <PrivateRoute>
            <SuspensePage>
              <CategoryScrollProductList />
            </SuspensePage>
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.BOARD,
        element: (
          <PrivateRoute>
            <SuspensePage>
              <BoardPage />
            </SuspensePage>
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.PASSWORD_VALIDATION,
        element: (
          <PrivateRoute>
            <SuspensePage>
              <PasswordValidationPage />
            </SuspensePage>
          </PrivateRoute>
        ),
      },
    ],
  },
];

// Create the router instance
export const router = createBrowserRouter(routes);

// Type for route paths
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
