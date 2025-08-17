import React from 'react';
import { UserCard } from '@/features/user/model/userSlice';
import {
  UserCardContainer,
  BannerContainer,
  BannerGradient,
  AvatarContainer,
  StyledAvatar,
  UserInfoContainer,
  UserName,
  UserRole,
} from '@/features/user/styles';
import { useUserCard } from '@/features/user/model/useUserCard';
import { SocialMediaIcons, UserStatistics } from '@/features/user/components';

interface UserCardItemProps {
  user: UserCard;
  className?: string;
}

const UserCardItem: React.FC<UserCardItemProps> = ({
  user,
  className = '',
}) => {
  const { formatNumber, getInitials, getGradientIndex } = useUserCard();

  return (
    <UserCardContainer className={className}>
      {/* Banner Gradient */}
      <BannerContainer>
        <BannerGradient gradientIndex={getGradientIndex(user.id)} />
      </BannerContainer>

      {/* Profile Picture */}
      <AvatarContainer>
        <StyledAvatar>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            getInitials(user.name)
          )}
        </StyledAvatar>
      </AvatarContainer>

      {/* User Info */}
      <UserInfoContainer>
        <UserName>{user.name}</UserName>
        <UserRole>{user.role}</UserRole>
      </UserInfoContainer>

      {/* Social Media Icons */}
      <SocialMediaIcons socialMedia={user.socialMedia} />

      {/* Statistics */}
      <UserStatistics user={user} formatNumber={formatNumber} />
    </UserCardContainer>
  );
};

export default UserCardItem;
