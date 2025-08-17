import { memo, useMemo } from 'react';
import { notifications } from '@shared/constants';
import { NotificationCard } from '@features/notification/ui/NotificationCard';
import EmptyNotificationState from '@features/notification/ui/EmptyNotificationState';

const ArchivedNotifictions = () => {
  const archivedNotifications = useMemo(
    () => notifications.filter((notification) => notification.archived),
    []
  );

  if (archivedNotifications.length === 0) {
    return <EmptyNotificationState type="archived" />;
  }

  return (
    <>
      {archivedNotifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </>
  );
};

export default memo(ArchivedNotifictions);
