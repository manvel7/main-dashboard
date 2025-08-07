import { useCallback } from 'react';

import { navigationRoutes } from '@app/routes';
import { SidebarProps } from '@widgets/sidebar/model/types';
import { useSidebar } from '@widgets/sidebar/model/useSidebar';
import {
  StyledDrawer,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_COLLAPSED
} from '@widgets/sidebar/ui/styles';
import { NavigationList } from '@widgets/sidebar/ui/NavigationList';
import { LogoutAction } from '@widgets/sidebar/ui/LogoutAction';

export const Sidebar: React.FC<SidebarProps> = ({ children, open: controlledOpen }) => {
  const {
    isOpen,
    isMobile,
    location,
    expandedItems,
    handleNavigate,
    handleExpandClick
  } = useSidebar({
    open: controlledOpen,
  });

  const renderContent = useCallback(() => (
    <NavigationList
      routes={navigationRoutes}
      currentPath={location.pathname}
      expandedItems={expandedItems}
      isOpen={isOpen}
      isMobile={isMobile}
      onNavigate={handleNavigate}
      onExpandClick={handleExpandClick}
    />
  ), [location.pathname, handleNavigate, handleExpandClick, expandedItems, isOpen, isMobile]);

  const renderFooter = useCallback(() => (
    <LogoutAction
      isOpen={isOpen}
      onLogout={() => { }}
    />
  ), [isOpen, isMobile]);

  return (
    <>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={true} // Always show the drawer
        sx={{
          width: isOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED,
          '& .MuiDrawer-paper': {
            width: isOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED,
          }
        }}
      >
        {children({
          content: renderContent,
          footer: renderFooter,
        })}
      </StyledDrawer>
    </>
  );
};
