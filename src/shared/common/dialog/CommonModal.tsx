import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from '@mui/system';
import React from 'react';

interface CommonModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>; // optional
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,
    minWidth: 800,
    height: 600,
  },
}));

const CommonModal: React.FC<CommonModalProps> = ({ open, onClose, title, children, sx }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="common-modal-title"
      aria-describedby="common-modal-description"
      sx={sx || {}}
    >
      <DialogTitle id="common-modal-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </StyledDialog>
  );
};

export default CommonModal;
