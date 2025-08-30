import React, { useMemo } from 'react';
import { LoadingButton } from '@mui/lab';
import type { LoadingButtonProps } from '@mui/lab/LoadingButton';

type CommonLoadingButtonProps = {
  title?: string;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: LoadingButtonProps['type'];
  variant?: LoadingButtonProps['variant'];
  color?: LoadingButtonProps['color'];
  sx?: LoadingButtonProps['sx'];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  borderRadius?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
};

const CommonLoadingButton: React.FC<CommonLoadingButtonProps> = ({
  title,
  children,
  loading = false,
  disabled = false,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
  borderRadius,
  sx,
  width,
  maxWidth,
  onClick,
  size,
}) => {
  const buttonSx = useMemo(
    () => ({
      width: width ?? '100%',
      ...(maxWidth ? { maxWidth } : {}),
      borderRadius,
      py: 1,
      ...sx,
      '&&.Mui-disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'auto',
      },
    }),
    [sx, borderRadius, width, maxWidth]
  );

  return (
    <LoadingButton
      loading={loading}
      disabled={disabled || loading}
      type={type}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={buttonSx}
      onClick={onClick}
      size={size}
    >
      {children ?? title}
    </LoadingButton>
  );
};

export default CommonLoadingButton;
