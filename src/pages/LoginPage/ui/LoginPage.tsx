import React from 'react';
import { LoginContainer, LoginCard, LoginCardContent } from './styles';
import LoginForm from '@features/auth/ui/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <LoginCardContent>
          <LoginForm />
        </LoginCardContent>
      </LoginCard>
    </LoginContainer>
  );
};
