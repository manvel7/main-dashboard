import { Container } from '@mui/material';
import { UserCreateForm } from '@features/user';

export const UserCreatePage = () => {
  return (
    <Container maxWidth="xl">
      <UserCreateForm />
    </Container>
  );
};
