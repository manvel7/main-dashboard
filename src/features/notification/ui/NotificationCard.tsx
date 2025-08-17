// components/NotificationCard.tsx
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,
  Button,
  styled,
} from '@mui/material';
import {
  PersonAdd as PersonAddIcon,
  AlternateEmail as AlternateEmailIcon,
  FileUpload as FileUploadIcon,
  MusicNote as MusicNoteIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { notificationConfig } from '@shared/common/notification/config/notificationIcons';
import {
  Notification,
  NotificationType,
} from '@shared/common/notification/config/notificationIcons';

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: '#2a2a2a', // Dark grey background
  boxShadow: 'none',
  border: '1px solid #404040', // Darker border
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
    borderRadius: theme.spacing(1.5),
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  [theme.breakpoints.down('sm')]: {
    width: 28,
    height: 28,
  },
}));

const NotificationContent = styled(Box)({
  flex: 1,
});

const NotificationTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#ffffff', // White text for dark mode
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    lineHeight: 1.3,
  },
}));

const NotificationMeta = styled(Typography)(({ theme }) => ({
  display: 'block',
  marginTop: theme.spacing(0.5),
  color: '#b0b0b0', // Light grey text for metadata
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    marginTop: theme.spacing(0.25),
  },
}));

const ActionButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.75),
    marginTop: theme.spacing(1),
  },
}));

const AcceptButton = styled(Button)(({ theme }) => ({
  borderColor: '#666666',
  color: '#333333',
  backgroundColor: '#ffffff',
  '&:hover': {
    borderColor: '#333333',
    backgroundColor: '#f5f5f5',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 1),
    minHeight: 36,
  },
}));

const DeclineButton = styled(Button)(({ theme }) => ({
  borderColor: '#ffffff',
  color: '#ffffff',
  backgroundColor: '#666666',
  '&:hover': {
    borderColor: '#999999',
    backgroundColor: '#777777',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 1),
    minHeight: 36,
  },
}));

const ReplyButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  borderColor: '#666666',
  color: '#333333',
  backgroundColor: '#ffffff',
  '&:hover': {
    borderColor: '#333333',
    backgroundColor: '#f5f5f5',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 1),
    minHeight: 36,
  },
}));

const QuotedContentBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  backgroundColor: '#404040', // Darker grey for quoted content
  borderRadius: theme.spacing(1),
  border: '1px solid #505050',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
  },
}));

const FileDetailsBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  backgroundColor: '#404040', // Darker grey for file details
  borderRadius: theme.spacing(1),
  border: '1px solid #505050',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

const FileInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    width: '100%',
  },
}));

const FileIconBox = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 28,
    height: 28,
    borderRadius: theme.spacing(0.75),
  },
}));

const FileInfo = styled(Box)({
  flex: 1,
});

const FileName = styled(Typography)(({ theme }) => ({
  fontWeight: 'medium',
  color: '#ffffff', // White text for file name
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const FileSize = styled(Typography)(({ theme }) => ({
  color: '#b0b0b0', // Light grey text for file size
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  borderColor: '#ffffff',
  color: '#ffffff',
  backgroundColor: '#666666',
  '&:hover': {
    borderColor: '#999999',
    backgroundColor: '#777777',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 1),
    minHeight: 36,
    width: '100%',
  },
}));

const DefaultAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  [theme.breakpoints.down('sm')]: {
    width: 28,
    height: 28,
  },
}));

const DefaultContent = styled(Stack)({
  flex: 1,
});

const QuotedContentText = styled(Typography)(({ theme }) => ({
  color: '#ffffff', // White text for quoted content
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    lineHeight: 1.4,
  },
}));

const DefaultNotificationTitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff', // White text for default notifications
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    lineHeight: 1.3,
  },
}));

const DefaultNotificationMeta = styled(Typography)(({ theme }) => ({
  color: '#b0b0b0', // Light grey text for default notification metadata
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

// Render functions
const renderFriendRequestNotification = (notification: Notification) => (
  <StyledCard>
    <CardContent sx={{ p: 2 }}>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <StyledAvatar
          sx={{
            bgcolor: notificationConfig[NotificationType.FRIEND_REQUEST].color,
          }}
        >
          <PersonAddIcon />
        </StyledAvatar>
        <NotificationContent>
          <NotificationTitle variant="body1">
            {notification.userName} sent you a friend request
          </NotificationTitle>
          <NotificationMeta variant="caption">
            {notification.date} • {notification.category}
          </NotificationMeta>
          <ActionButtonContainer>
            <AcceptButton variant="outlined" size="small">
              Accept
            </AcceptButton>
            <DeclineButton variant="outlined" size="small">
              Decline
            </DeclineButton>
          </ActionButtonContainer>
        </NotificationContent>
      </Box>
    </CardContent>
  </StyledCard>
);

const renderMentionNotification = (notification: Notification) => (
  <StyledCard>
    <CardContent sx={{ p: 2 }}>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <StyledAvatar
          sx={{ bgcolor: notificationConfig[NotificationType.MENTION].color }}
        >
          <AlternateEmailIcon />
        </StyledAvatar>
        <NotificationContent>
          <NotificationTitle variant="body1">
            {notification.userName} mentioned you in {notification.category}
          </NotificationTitle>
          <NotificationMeta variant="caption">
            {notification.date} • {notification.category}
          </NotificationMeta>
          {notification.quotedContent && (
            <QuotedContentBox>
              <QuotedContentText variant="body2">
                {notification.quotedContent}
              </QuotedContentText>
            </QuotedContentBox>
          )}
          <ReplyButton variant="outlined" size="small">
            Reply
          </ReplyButton>
        </NotificationContent>
      </Box>
    </CardContent>
  </StyledCard>
);

const renderFileUploadNotification = (notification: Notification) => (
  <StyledCard>
    <CardContent sx={{ p: 2 }}>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <StyledAvatar
          sx={{
            bgcolor: notificationConfig[NotificationType.FILE_UPLOAD].color,
          }}
        >
          <FileUploadIcon />
        </StyledAvatar>
        <NotificationContent>
          <NotificationTitle variant="body1">
            {notification.userName} added file to {notification.category}
          </NotificationTitle>
          <NotificationMeta variant="caption">
            {notification.date} • {notification.category}
          </NotificationMeta>
          {notification.fileName && (
            <FileDetailsBox>
              <FileInfoContainer>
                <FileIconBox
                  sx={{
                    backgroundColor:
                      notificationConfig[NotificationType.FILE_UPLOAD].color,
                  }}
                >
                  <MusicNoteIcon sx={{ color: 'white', fontSize: 16 }} />
                </FileIconBox>
                <FileInfo>
                  <FileName variant="body2">{notification.fileName}</FileName>
                  {notification.fileSize && (
                    <FileSize variant="caption">
                      {notification.fileSize}
                    </FileSize>
                  )}
                </FileInfo>
              </FileInfoContainer>
              <DownloadButton
                variant="outlined"
                size="small"
                startIcon={<DownloadIcon />}
              >
                Download
              </DownloadButton>
            </FileDetailsBox>
          )}
        </NotificationContent>
      </Box>
    </CardContent>
  </StyledCard>
);

const renderDefaultNotification = (notification: Notification) => {
  const { icon, color } = notificationConfig[notification.type];

  return (
    <StyledCard>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}>
        <DefaultAvatar sx={{ bgcolor: color }}>{icon}</DefaultAvatar>
        <DefaultContent spacing={0.5}>
          <DefaultNotificationTitle variant="body1">
            {notification.title}
          </DefaultNotificationTitle>
          <DefaultNotificationMeta variant="caption">
            {notification.date} • {notification.category}
          </DefaultNotificationMeta>
        </DefaultContent>
      </CardContent>
    </StyledCard>
  );
};

export const NotificationCard = ({
  notification,
}: {
  notification: Notification;
}) => {
  switch (notification.type) {
    case NotificationType.FRIEND_REQUEST:
      return renderFriendRequestNotification(notification);
    case NotificationType.MENTION:
      return renderMentionNotification(notification);
    case NotificationType.FILE_UPLOAD:
      return renderFileUploadNotification(notification);
    default:
      return renderDefaultNotification(notification);
  }
};
