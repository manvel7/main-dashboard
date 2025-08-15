import React from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { StyledListItem, StyledListItemButton } from './styles';
import { useTranslation } from 'react-i18next';
import { NavigationItemWrapper } from './NavigationItemWrapper';

interface NavigationItemProps {
  path: string;
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  isOpen: boolean;
  isMobile: boolean;
  hasChildren?: boolean;
  isExpanded?: boolean;
  isChild?: boolean;
  onClick: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  path,
  label,
  icon,
  isSelected,
  isOpen,
  isMobile,
  hasChildren = false,
  isExpanded = false,
  isChild = false,
  onClick
}) => {
  const { t } = useTranslation();
  return (
    <StyledListItem
      disablePadding
      selected={isSelected}
    >
      <NavigationItemWrapper
        label={t(label)}
        onClick={onClick}
        isMobile={isMobile}
        isOpen={isOpen}
      >
        <StyledListItemButton
          onClick={(e) => {
            e.stopPropagation(); // Prevent double click from wrapper
            onClick();
          }}
          sx={{
            justifyContent: isOpen ? 'flex-start' : 'center',
            paddingLeft: isChild ? (isOpen ? 4 : 1.5) : (isOpen ? 2 : 1.5),
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 'auto' }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={t(label)}
            sx={{
              display: isOpen ? 'block' : 'none'
            }}
          />
          {hasChildren && isOpen && (
            isExpanded ? <ExpandLess /> : <ExpandMore />
          )}
        </StyledListItemButton>
      </NavigationItemWrapper>
    </StyledListItem>
  );
};
