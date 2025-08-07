import React from 'react';
import { Tooltip } from '@mui/material';

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
  isOpen
}) => {
  if (isMobile && !isOpen) {
    return (
      <Tooltip
        title={label}
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
          }
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
