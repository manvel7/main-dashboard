import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListItemIcon, ListItemText, Box } from '@mui/material';
import { ExpandLess, ExpandMore, ArrowForward } from '@mui/icons-material';
import { StyledListItem, StyledListItemButton } from './styles';
import { NavigationItemWrapper } from '@widgets/sidebar/ui/NavigationItemWrapper';

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
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <StyledListItem disablePadding selected={isSelected}>
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
            flexDirection: isOpen ? 'row' : 'column',
            justifyContent: isOpen ? 'flex-start' : 'center',
            paddingLeft: isChild ? (isOpen ? 2 : 1.5) : isOpen ? 2 : 1.5,
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 'auto' }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={t(label)}
            sx={{
              display: isOpen ? 'block' : isMobile ? 'block' : 'none',
              textAlign: isOpen ? 'left' : 'center',
              '& .MuiListItemText-primary': {
                fontSize: isOpen ? 'inherit' : '10px',
                lineHeight: 1.2,
              },
            }}
          />
          {hasChildren &&
            isOpen &&
            (isExpanded ? <ExpandLess /> : <ExpandMore />)}
          {hasChildren && isMobile && !isOpen && (
            <Box
              sx={{
                position: 'absolute',
                right: 4,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255, 255, 255, 0.6)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 12,
                height: 12,
              }}
            >
              <ArrowForward sx={{ fontSize: 12 }} />
            </Box>
          )}
        </StyledListItemButton>
      </NavigationItemWrapper>
    </StyledListItem>
  );
};
