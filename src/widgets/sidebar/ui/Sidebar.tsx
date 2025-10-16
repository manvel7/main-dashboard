import { useCallback } from 'react';
import { Box } from '@mui/material';
import { navigationRoutes } from '@app/routes';
import { SidebarProps } from '@widgets/sidebar/model/types';
import { useSidebar } from '@widgets/sidebar/model/useSidebar';
import {
  StyledDrawer,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_COLLAPSED,
} from '@widgets/sidebar/ui/styles';
import { NavigationList } from '@widgets/sidebar/ui/NavigationList';
import { LogoutAction } from '@widgets/sidebar/ui/LogoutAction';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  open: controlledOpen,
  onToggle,
}) => {
  const {
    isOpen,
    isMobile,
    location,
    expandedItems,
    handleNavigate,
    handleExpandClick,
    handleLogout,
    isRouteActive,
  } = useSidebar({
    open: controlledOpen,
  });

  const renderContent = useCallback(
    () => (
      <NavigationList
        routes={navigationRoutes}
        currentPath={location.pathname}
        expandedItems={expandedItems}
        isOpen={isOpen}
        isMobile={isMobile}
        onNavigate={handleNavigate}
        onExpandClick={handleExpandClick}
        isRouteActive={isRouteActive}
      />
    ),
    [
      location.pathname,
      handleNavigate,
      handleExpandClick,
      expandedItems,
      isOpen,
      isMobile,
    ]
  );

  const renderFooter = useCallback(
    () => <LogoutAction isOpen={isOpen} onLogout={handleLogout} />,
    [isOpen, handleLogout]
  );

  const renderHeader = useCallback(() => {
    return (
      <Box
        onClick={onToggle}
        sx={{
          textAlign: isOpen ? 'left' : 'center',
          marginLeft: isOpen ? '16px' : 0,
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  }, [isOpen, onToggle]);

  return (
    <>
      <StyledDrawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={isOpen}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: isMobile
            ? isOpen
              ? SIDEBAR_WIDTH
              : 0
            : isOpen
              ? SIDEBAR_WIDTH
              : SIDEBAR_WIDTH_COLLAPSED,
          '& .MuiDrawer-paper': {
            width: isMobile
              ? isOpen
                ? SIDEBAR_WIDTH
                : 0
              : isOpen
                ? SIDEBAR_WIDTH
                : SIDEBAR_WIDTH_COLLAPSED,
          },
          display: isMobile && !isOpen ? 'none' : 'block',
        }}
      >
        {children({
          header: isMobile ? renderHeader : undefined,
          content: renderContent,
          footer: renderFooter,
        })}
      </StyledDrawer>
    </>
  );
};
