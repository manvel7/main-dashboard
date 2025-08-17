import { useState } from 'react';
import { tabItems } from '@shared/constants';

const useNotificationDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string | number>(tabItems[0].id);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setActiveTab(tabItems[0].id);
  };

  return {
    open,
    handleOpen,
    handleClose,
    activeTab,
    setActiveTab,
  };
};

export default useNotificationDrawer;
