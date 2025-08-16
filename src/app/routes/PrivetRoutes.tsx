import { Navigate } from 'react-router-dom';
import { ReactNode, ReactElement } from 'react';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  return !!Cookies.get('token'); // check if token exists
};

// ✅ Private Route wrapper
const PrivateRoute = ({ children }: { children: ReactNode }): ReactElement => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
