import { memo, type ReactNode, type MouseEvent } from 'react';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import { Box, type PopoverProps as MuiPopoverProps } from '@mui/material';

export type RenderProps = {
  open: boolean;
  toggle: (event?: MouseEvent<HTMLElement>) => void;
  openPopover: (event: MouseEvent<HTMLElement>) => void;
  closePopover: () => void;
  anchorEl: HTMLElement | null;
  id?: string;
};

export type CommonPopoverProps = {
  id?: string;
  className?: string;
  /** Render prop for the popover content */
  content: (args: RenderProps) => ReactNode;
  /** Controlled open state */
  open: boolean;
  anchorEl: HTMLElement | null;
  onOpen: (event: MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  disablePortal?: boolean;
  popoverProps?: Omit<
    MuiPopoverProps,
    'open' | 'anchorEl' | 'onClose' | 'children'
  >;
};

const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[6],
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  minWidth: 160,
}));

function CommonPopoverBase({
  id,
  className,
  content,
  open,
  anchorEl,
  onOpen,
  onClose,
  disablePortal,
  popoverProps,
}: CommonPopoverProps) {
  const renderArgs: RenderProps = {
    id,
    open,
    anchorEl,
    toggle: (event) => {
      if (open) {
        onClose();
      } else if (event) {
        onOpen(event);
      }
    },
    openPopover: onOpen,
    closePopover: onClose,
  };

  return (
    <StyledPopover
      id={id}
      className={className}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      disablePortal={disablePortal}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      {...popoverProps}
    >
      <ContentContainer>{content(renderArgs)}</ContentContainer>
    </StyledPopover>
  );
}

export const CommonPopover = memo(CommonPopoverBase);

export default CommonPopover;
