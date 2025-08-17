import React from 'react';
import { UserCard } from '@/features/user/model/userSlice';
import {
  StatsContainer,
  StatItem,
  StatValue,
  StatLabel,
} from '@/features/user/styles';

interface UserStatisticsProps {
  user: UserCard;
  formatNumber: (num: number) => string;
}

const UserStatistics: React.FC<UserStatisticsProps> = ({
  user,
  formatNumber,
}) => {
  return (
    <StatsContainer>
      <StatItem>
        <StatValue>{formatNumber(user.followers)}</StatValue>
        <StatLabel>Follower</StatLabel>
      </StatItem>
      <StatItem>
        <StatValue>{formatNumber(user.following)}</StatValue>
        <StatLabel>Following</StatLabel>
      </StatItem>
      <StatItem>
        <StatValue>{formatNumber(user.totalPosts || 0)}</StatValue>
        <StatLabel>Total post</StatLabel>
      </StatItem>
    </StatsContainer>
  );
};

export default UserStatistics;
