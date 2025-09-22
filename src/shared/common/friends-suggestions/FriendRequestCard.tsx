import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
} from '@mui/material';
import { PersonAdd, Close, Visibility, Circle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { FriendRequestCardProps } from './types';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 280,
  margin: '0 auto',
  borderRadius: theme.spacing(2),
  boxShadow: 'var(--shadow-2)',
  transition: 'all var(--transition-normal) var(--easing-standard)',
  '&:hover': {
    boxShadow: 'var(--shadow-4)',
    transform: 'translateY(-2px)',
  },
  // Mobile responsiveness
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    margin: theme.spacing(0, 1),
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `3px solid ${theme.palette.background.paper}`,
  boxShadow: 'var(--shadow-2)',
  // Mobile responsiveness
  [theme.breakpoints.down('sm')]: {
    width: 60,
    height: 60,
  },
}));

const OnlineIndicator = styled(Circle)(({ theme }) => ({
  position: 'absolute',
  bottom: 2,
  right: 2,
  width: 16,
  height: 16,
  backgroundColor: theme.palette.success.main,
  border: `2px solid ${theme.palette.background.paper}`,
  borderRadius: '50%',
}));

const MutualFriendsChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  height: 24,
  '& .MuiChip-label': {
    padding: '0 8px',
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  width: '100%',
  marginTop: theme.spacing(2),
}));

const AddButton = styled(Button)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ViewButton = styled(Button)(({ theme }) => ({
  flex: 1,
  borderColor: theme.palette.grey[300],
  color: theme.palette.text.primary,
  '&:hover': {
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'var(--shadow-1)',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const FriendRequestCard: React.FC<FriendRequestCardProps> = ({
  friend,
  onAddFriend,
  onRemoveSuggestion,
  onViewProfile,
}) => {
  const handleAddFriend = () => {
    onAddFriend(friend.id);
  };

  const handleRemoveSuggestion = () => {
    onRemoveSuggestion(friend.id);
  };

  const handleViewProfile = () => {
    onViewProfile(friend.id);
  };

  return (
    <StyledCard>
      <CardContent sx={{ p: 2, position: 'relative' }}>
        <CloseButton
          size="small"
          onClick={handleRemoveSuggestion}
          aria-label="Remove suggestion"
        >
          <Close fontSize="small" />
        </CloseButton>

        <ProfileSection>
          <Box sx={{ position: 'relative' }}>
            <StyledAvatar src={friend.profilePicture} alt={friend.name}>
              {friend.name.charAt(0).toUpperCase()}
            </StyledAvatar>
            {friend.isOnline && <OnlineIndicator />}
          </Box>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              fontSize: '1rem',
              lineHeight: 1.2,
              color: 'text.primary',
            }}
          >
            {friend.name}
          </Typography>

          {friend.mutualFriends > 0 && (
            <MutualFriendsChip
              label={`${friend.mutualFriends} mutual friend${
                friend.mutualFriends > 1 ? 's' : ''
              }`}
              size="small"
            />
          )}

          {friend.lastSeen && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: '0.75rem' }}
            >
              {friend.lastSeen}
            </Typography>
          )}
        </ProfileSection>

        <ActionButtons>
          <AddButton
            variant="contained"
            startIcon={<PersonAdd />}
            onClick={handleAddFriend}
            size="small"
          >
            Add Friend
          </AddButton>
          <ViewButton
            variant="outlined"
            startIcon={<Visibility />}
            onClick={handleViewProfile}
            size="small"
          >
            View
          </ViewButton>
        </ActionButtons>
      </CardContent>
    </StyledCard>
  );
};

export default FriendRequestCard;
