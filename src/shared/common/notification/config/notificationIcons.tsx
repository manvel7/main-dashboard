import { ReactElement } from 'react';
// config/notificationIcons.ts
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { blue, green, orange, red, purple, indigo } from '@mui/material/colors';

// types/NotificationType.ts
export enum NotificationType {
  ORDER = 'order',
  DELIVER = 'deliver',
  EMAIL = 'email',
  MESSAGE = 'message',
  FRIEND_REQUEST = 'friend_request',
  MENTION = 'mention',
  FILE_UPLOAD = 'file_upload',
}

// types/Notification.ts
export interface Notification {
  id: string | number;
  type: NotificationType;
  title: string;
  date: string;
  category: string;
  userAvatar?: string;
  userName?: string;
  quotedContent?: string;
  fileName?: string;
  fileSize?: string;
  fileIcon?: string;
  markedAsRead: boolean;
  archived: boolean;
}

export const notificationConfig: Record<
  NotificationType,
  { icon: ReactElement; color: string }
> = {
  [NotificationType.ORDER]: {
    icon: <ShoppingBagIcon />,
    color: orange[500],
  },
  [NotificationType.DELIVER]: {
    icon: <LocalShippingIcon />,
    color: green[500],
  },
  [NotificationType.EMAIL]: {
    icon: <EmailIcon />,
    color: red[400],
  },
  [NotificationType.MESSAGE]: {
    icon: <ChatBubbleIcon />,
    color: blue[500],
  },
  [NotificationType.FRIEND_REQUEST]: {
    icon: <PersonAddIcon />,
    color: indigo[500],
  },
  [NotificationType.MENTION]: {
    icon: <AlternateEmailIcon />,
    color: red[500],
  },
  [NotificationType.FILE_UPLOAD]: {
    icon: <FileUploadIcon />,
    color: purple[500],
  },
};
