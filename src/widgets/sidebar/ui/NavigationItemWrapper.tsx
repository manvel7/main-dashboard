import React from 'react';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface NavigationItemWrapperProps {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  isMobile: boolean;
  isOpen: boolean;
}

export const NavigationItemWrapper: React.FC<NavigationItemWrapperProps> = ({
  children,
  label,
  onClick,
  isMobile,
  isOpen,
}) => {
  const { t } = useTranslation();
  if (isMobile && !isOpen) {
    return (
      <Tooltip
        title={t(label)}
        placement="right"
        arrow
        sx={{
          '& .MuiTooltip-tooltip': {
            backgroundColor: '#333',
            color: '#fff',
            fontSize: '0.875rem',
          },
          '& .MuiTooltip-arrow': {
            color: '#333',
          },
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {children}
        </div>
      </Tooltip>
    );
  }
  return <div onClick={onClick}>{children}</div>;
};
