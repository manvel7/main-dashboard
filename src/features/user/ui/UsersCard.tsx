import { UserCardItem } from '@/features/user';
import { UserCard } from '@/features/user/model/userSlice';
import { selectUsersCard } from '@/features/user/model/selectors';
import { UsersCardContainer, UsersCardGrid } from '@/features/user/styles';
import { useAppSelector } from '@/app/store/hooks';

const UsersCard = () => {
  const usersCard = useAppSelector(selectUsersCard);

  return (
    <UsersCardContainer>
      <UsersCardGrid>
        {usersCard.map((user: UserCard) => (
          <UserCardItem key={user.id} user={user} />
        ))}
      </UsersCardGrid>
    </UsersCardContainer>
  );
};

export default UsersCard;
