import React from 'react';
import { Collapse } from '@mui/material';
import { StyledList } from './styles';
import { NavigationItem } from './NavigationItem';

interface NavigationRoute {
  path: string;
  label: string;
  icon: React.ReactNode;
  children?: NavigationRoute[];
}

interface NavigationListProps {
  routes: NavigationRoute[];
  currentPath: string;
  expandedItems: string[];
  isOpen: boolean;
  isMobile: boolean;
  onNavigate: (path: string) => void;
  onExpandClick: (path: string) => void;
  isChildList?: boolean;
}

export const NavigationList: React.FC<NavigationListProps> = ({
  routes,
  currentPath,
  expandedItems,
  isOpen,
  isMobile,
  onNavigate,
  onExpandClick,
  isChildList = false,
}) => {
  const handleItemClick = (route: NavigationRoute) => {
    if (route.children) {
      onExpandClick(route.path);
    } else {
      onNavigate(route.path);
    }
  };

  return (
    <StyledList component={isChildList ? 'div' : undefined}>
      {routes.map((route) => (
        <div key={route.path}>
          <NavigationItem
            path={route.path}
            label={route.label}
            icon={route.icon}
            isSelected={currentPath === route.path}
            isOpen={isOpen}
            isMobile={isMobile}
            hasChildren={!!route.children}
            isExpanded={expandedItems.includes(route.path)}
            isChild={isChildList}
            onClick={() => handleItemClick(route)}
          />

          {route.children && (
            <Collapse
              in={expandedItems.includes(route.path)}
              timeout="auto"
              unmountOnExit
            >
              <NavigationList
                routes={route.children}
                currentPath={currentPath}
                expandedItems={expandedItems}
                isOpen={isOpen}
                isMobile={isMobile}
                onNavigate={onNavigate}
                onExpandClick={onExpandClick}
                isChildList={true}
              />
            </Collapse>
          )}
        </div>
      ))}
    </StyledList>
  );
};
