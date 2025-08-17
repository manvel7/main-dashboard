import { lazy } from 'react';
import Tab from '@shared/common/tab/Tab';
import { tabItems } from '@shared/constants';
import { useTranslation } from 'react-i18next';
import { SuspensePage } from '@shared/containers/SuspensePage';
import { Button, Box, IconButton, Badge } from '@mui/material';
import AllNotifications from '@features/notification/ui/AllNotifications';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import UnreadNotifictaions from '@features/notification/ui/UnreadNotifictaions';
import ArchivedNotifictions from '@features/notification/ui/ArchivedNotifictions';
import useNotificationDrawer from '@features/notification/model/useNotificationDrawer';

const NotificationDrawer = lazy(
  () => import('@shared/common/notification/NotificationDrawer')
);

const NotifictaionContent = () => {
  const { t } = useTranslation();
  const { open, handleOpen, handleClose, activeTab, setActiveTab } =
    useNotificationDrawer();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return <AllNotifications />;
      case 'unread':
        return <UnreadNotifictaions />;
      case 'archived':
        return <ArchivedNotifictions />;
      default:
        return t('No notifications yet.');
    }
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        aria-label="notifications"
      >
        <Badge badgeContent={5} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      {open && (
        <SuspensePage hasLoading={false}>
          <NotificationDrawer
            open={open}
            onClose={handleClose}
            title={t('Notifications')}
            header={
              <Tab
                items={tabItems}
                activeId={activeTab}
                onChange={setActiveTab}
              />
            }
            footer={
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="text" size="small" onClick={() => {}}>
                  {t('Mark All Read')}
                </Button>
              </Box>
            }
          >
            {() => <>{renderTabContent()}</>}
          </NotificationDrawer>
        </SuspensePage>
      )}
    </>
  );
};

export default NotifictaionContent;
