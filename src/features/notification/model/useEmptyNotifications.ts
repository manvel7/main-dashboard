import { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  NotificationsNone as NotificationsIcon,
  Archive as ArchiveIcon,
  MarkEmailUnread as UnreadIcon,
} from '@mui/icons-material';

export type NotificationType = 'all' | 'unread' | 'archived';

interface EmptyStateConfig {
  icon: typeof NotificationsIcon;
  title: string;
  description: string;
}

export const useEmptyNotifications = (type: NotificationType) => {
  const { t } = useTranslation();

  const emptyStateConfig = useMemo((): EmptyStateConfig => {
    switch (type) {
      case 'all':
        return {
          icon: NotificationsIcon,
          title: t('No notifications yet'),
          description: t(
            "You're all caught up! When you receive new notifications, they'll appear here."
          ),
        };
      case 'unread':
        return {
          icon: UnreadIcon,
          title: t('No unread notifications'),
          description: t("Great job! You've read all your notifications."),
        };
      case 'archived':
        return {
          icon: ArchiveIcon,
          title: t('No archived notifications'),
          description: t(
            'Archived notifications will appear here when you archive them.'
          ),
        };
      default:
        return {
          icon: NotificationsIcon,
          title: t('No notifications'),
          description: t('No notifications to display.'),
        };
    }
  }, [type, t]);

  const getIconComponent = useCallback(
    () => emptyStateConfig.icon,
    [emptyStateConfig.icon]
  );

  const getTitle = useCallback(
    () => emptyStateConfig.title,
    [emptyStateConfig.title]
  );

  const getDescription = useCallback(
    () => emptyStateConfig.description,
    [emptyStateConfig.description]
  );

  const getConfig = useCallback(() => emptyStateConfig, [emptyStateConfig]);

  return useMemo(
    () => ({
      icon: emptyStateConfig.icon,
      title: emptyStateConfig.title,
      description: emptyStateConfig.description,
      config: emptyStateConfig,
      getIconComponent,
      getTitle,
      getDescription,
      getConfig,
    }),
    [
      emptyStateConfig.icon,
      emptyStateConfig.title,
      emptyStateConfig.description,
      emptyStateConfig,
      getIconComponent,
      getTitle,
      getDescription,
      getConfig,
    ]
  );
};
