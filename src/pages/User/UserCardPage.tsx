import React from 'react';
import { Container } from '@mui/material';

import UsersCard from '@features/user/ui/UsersCard';
import { DateTimeRangePicker } from '@/shared/common/dateRange/DateTimeRangePicker';

export const UserCardPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <DateTimeRangePicker />
      <UsersCard />
    </Container>
  );
};
