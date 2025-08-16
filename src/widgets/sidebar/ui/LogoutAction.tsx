import React from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { StyledListItem, StyledListItemButton } from './styles';
import { useTranslation } from 'react-i18next';

interface LogoutActionProps {
  isOpen: boolean;
  onLogout: () => void;
}

export const LogoutAction: React.FC<LogoutActionProps> = ({
  isOpen,
  onLogout,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <StyledListItem disablePadding>
        <StyledListItemButton
          onClick={onLogout}
          sx={{
            justifyContent: isOpen ? 'flex-start' : 'center',
            paddingLeft: isOpen ? 2 : 1.5,
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)', // Red hover for logout action
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 'auto' }}>
            <LogoutIcon />
          </ListItemIcon>
          {isOpen && (
            <ListItemText
              primary={t('Logout')}
              sx={{
                color: 'inherit',
              }}
            />
          )}
        </StyledListItemButton>
      </StyledListItem>
    </>
  );
};
