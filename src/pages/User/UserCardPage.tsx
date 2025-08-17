import React from 'react';
import { Container } from '@mui/material';

import UsersCard from '@features/user/ui/UsersCard';

export const UserCardPage: React.FC = () => {

  return (
    <Container maxWidth="xl">
      <UsersCard />
    </Container>
  );
};
