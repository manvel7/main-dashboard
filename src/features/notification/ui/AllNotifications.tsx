import { memo } from 'react';
import { notifications } from '@shared/constants';
import { NotificationCard } from '@features/notification/ui/NotificationCard';
import EmptyNotificationState from '@features/notification/ui/EmptyNotificationState';

const AllNotifications = () => {
  const hasNotifications = notifications.length > 0;

  if (!hasNotifications) {
    return <EmptyNotificationState type="all" />;
  }

  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </>
  );
};

export default memo(AllNotifications);
