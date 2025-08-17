import { memo, useMemo } from 'react';
import { notifications } from '@shared/constants';
import { NotificationCard } from '@features/notification/ui/NotificationCard';
import EmptyNotificationState from '@features/notification/ui/EmptyNotificationState';

const UnreadNotifictaions = () => {
  const unreadNotifications = useMemo(
    () =>
      notifications.filter(
        (notification) => !notification.markedAsRead && !notification.archived
      ),
    []
  );

  if (unreadNotifications.length === 0) {
    return <EmptyNotificationState type="unread" />;
  }

  return (
    <>
      {unreadNotifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </>
  );
};

export default memo(UnreadNotifictaions);
