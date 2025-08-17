import { memo } from 'react';
import { Box, Typography, SvgIcon, styled } from '@mui/material';
import {
  useEmptyNotifications,
  NotificationType,
} from '@features/notification/model/useEmptyNotifications';

interface EmptyNotificationStateProps {
  type: NotificationType;
}

const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
  textAlign: 'center',
  minHeight: '200px',
}));

const EmptyStateIconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const EmptyStateTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

const EmptyStateDescription = styled(Typography)(({ theme }) => ({
  maxWidth: '300px',
  lineHeight: 1.5,
  color: theme.palette.text.secondary,
}));

const EmptyNotificationState: React.FC<EmptyNotificationStateProps> = ({
  type,
}) => {
  const { icon, title, description } = useEmptyNotifications(type);

  return (
    <EmptyStateContainer>
      <EmptyStateIconWrapper>
        <SvgIcon
          component={icon}
          sx={{
            fontSize: '4rem',
            color: 'text.secondary',
            opacity: 0.6,
          }}
        />
      </EmptyStateIconWrapper>
      <EmptyStateTitle variant="h6" color="text.primary">
        {title}
      </EmptyStateTitle>
      <EmptyStateDescription variant="body2">
        {description}
      </EmptyStateDescription>
    </EmptyStateContainer>
  );
};

export default memo(EmptyNotificationState);
