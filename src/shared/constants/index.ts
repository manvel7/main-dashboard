import {
  NotificationType,
  Notification,
} from '@shared/common/notification/config/notificationIcons';
import { TabItem } from '@shared/common/tab/Tab';

// Create tab items statically
export const tabItems: TabItem[] = [
  {
    id: 'all',
    title: 'All',
  },
  {
    id: 'unread',
    title: 'Unread',
  },
  {
    id: 'archived',
    title: 'Archived',
  },
];

export const notifications: Notification[] = [
  {
    id: 1,
    type: NotificationType.FRIEND_REQUEST,
    title: 'Deja Brady sent you a friend request',
    date: '9 minutes',
    category: 'Communication',
    userName: 'Deja Brady',
    markedAsRead: false,
    archived: false,
  },
  {
    id: 2,
    type: NotificationType.MENTION,
    title: 'Jayvon Hull mentioned you in Minimal UI',
    date: 'a day',
    category: 'Project UI',
    userName: 'Jayvon Hull',
    quotedContent:
      '@Jaydon Frankie feedback by asking questions or just leave a note of appreciation.',
    markedAsRead: false,
    archived: false,
  },
  {
    id: 3,
    type: NotificationType.FILE_UPLOAD,
    title: 'Lainey Davidson added file to File manager',
    date: '2 days',
    category: 'File manager',
    userName: 'Lainey Davidson',
    fileName: 'design-suriname-2015.mp...',
    fileSize: '2.3 Mb',
    markedAsRead: true,
    archived: false,
  },
  {
    id: 4,
    type: NotificationType.ORDER,
    title: 'Your order is placed waiting for shipping',
    date: '5 days',
    category: 'Order',
    markedAsRead: false,
    archived: false,
  },
  {
    id: 5,
    type: NotificationType.DELIVER,
    title: 'Delivery processing your order is being shipped',
    date: '6 days',
    category: 'Order',
    markedAsRead: true,
    archived: true,
  },
  {
    id: 6,
    type: NotificationType.MESSAGE,
    title: 'You have new message 5 unread messages',
    date: '7 days',
    category: 'Communication',
    markedAsRead: true,
    archived: true,
  },
  {
    id: 7,
    type: NotificationType.EMAIL,
    title: 'You have new mail',
    date: '8 days',
    category: 'Communication',
    markedAsRead: false,
    archived: true,
  },
];

// Country options for select box
export const countryOptions = [
  { value: '', label: 'Select a country' },
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'au', label: 'Australia' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'in', label: 'India' },
  { value: 'br', label: 'Brazil' },
  { value: 'mx', label: 'Mexico' },
  { value: 'ru', label: 'Russia' },
];



export type ValueOf<T> = T[keyof T];
