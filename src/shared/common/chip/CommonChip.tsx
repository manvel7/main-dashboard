import React from 'react';
import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  Box,
  styled,
} from '@mui/material';

type SupportedVariant = 'filled' | 'outlined' | 'contained';

export interface CommonChipProps
  extends Omit<MuiChipProps, 'label' | 'icon' | 'variant' | 'color'> {
  label: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: SupportedVariant;
  color?: MuiChipProps['color'];
}

const StyledChip = styled(MuiChip)(({ theme }) => ({
  padding: '16px 8px !important',
  '& .MuiChip-label': {
    padding: '4px 0 0 0 !important',
    lineHeight: '1.2 !important',
  },
  '& .MuiChip-deleteIcon': {
    margin: '0 !important',
  },
  '& .MuiChip-avatar': {
    margin: '0 !important',
  },
}));

function mapVariant(variant?: SupportedVariant): MuiChipProps['variant'] {
  if (variant === 'contained') return 'filled';
  return variant ?? 'filled';
}

function renderLabel(
  label: React.ReactNode,
  icon?: React.ReactNode,
  iconPosition: 'left' | 'right' = 'left'
): React.ReactNode {
  if (!icon) return label;
  return (
    <Box display="inline-flex" alignItems="center" gap={1}>
      {iconPosition === 'left' && (
        <Box
          display="inline-flex"
          sx={{
            width: 16,
            height: 16,
            '& > *': { width: '100%', height: '100%' },
          }}
        >
          {icon}
        </Box>
      )}
      <Box component="span">{label}</Box>
      {iconPosition === 'right' && (
        <Box
          display="inline-flex"
          sx={{
            width: 16,
            height: 16,
            '& > *': { width: '100%', height: '100%' },
          }}
        >
          {icon}
        </Box>
      )}
    </Box>
  );
}

const CommonChip: React.FC<CommonChipProps> = ({
  label,
  icon,
  iconPosition = 'left',
  variant,
  color = 'default',
  ...rest
}) => {
  return (
    <StyledChip
      label={renderLabel(label, icon, iconPosition)}
      variant={mapVariant(variant)}
      color={color}
      {...rest}
    />
  );
};

export default CommonChip;
