import { useCallback, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ROUTES } from '@app/routes';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}
const loginSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  rememberMe: yup.boolean().default(false),
});

export const useLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<LoginData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
    mode: 'all',
  });

  const handleSubmit = useCallback(
    async (values: LoginData) => {
      setIsLoading(true);
      try {
        const token = '1234567890';
        Cookies.set('token', token, {
          expires: 7,
          secure: true,
          sameSite: 'strict',
        });
        navigate(ROUTES.HOME);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate]
  );

  return {
    loginForm,
    handleSubmit,
    showPassword,
    setShowPassword,
    isLoading,
  };
};
