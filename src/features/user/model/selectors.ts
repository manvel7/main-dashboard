import type { RootState } from '@app/store';

// Basic selectors
export const selectUsersCard = (state: RootState) => state.user.usersCard;
