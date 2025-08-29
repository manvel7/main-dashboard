import { useCallback, useEffect, useId, useState } from 'react';

export type UsePopoverReturn = {
  id: string;
  open: boolean;
  anchorEl: HTMLElement | null;
  openPopover: (event: React.MouseEvent<HTMLElement>) => void;
  closePopover: () => void;
  togglePopover: (event?: React.MouseEvent<HTMLElement>) => void;
};

export function usePopover(initialOpen = false): UsePopoverReturn {
  const [open, setOpen] = useState(initialOpen);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const id = useId();

  const openPopover = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setOpen(false);
    setAnchorEl(null);
  }, []);

  const togglePopover = useCallback(
    (event?: React.MouseEvent<HTMLElement>) => {
      if (open) {
        closePopover();
      } else if (event) {
        openPopover(event);
      }
    },
    [open, openPopover, closePopover]
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopover();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closePopover]);

  return { id, open, anchorEl, openPopover, closePopover, togglePopover };
}

export default usePopover;
