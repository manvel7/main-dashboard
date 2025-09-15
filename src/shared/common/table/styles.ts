import { TableRow } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const TableHeaderRow = styled(TableRow)(({ theme }) => {
  const isDark = theme.palette.mode === 'dark';
  const backgroundColor = isDark
    ? alpha(theme.palette.primary.light, 0.25)
    : theme.palette.primary.main;
  const color = isDark ? theme.palette.primary.contrastText : '#fff';
  return {
    backgroundColor,
    '& th': {
      color,
      fontWeight: 600,
      borderColor: alpha(color, 0.2),
    },
    '& th:first-of-type': { borderTopLeftRadius: 16 },
    '& th:last-of-type': { borderTopRightRadius: 16 },
  };
});

export const TableBodyRow = styled(TableRow)(({ theme }) => {
  const isDark = theme.palette.mode === 'dark';
  return {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:nth-of-type(odd)': {
      backgroundColor: isDark
        ? alpha(theme.palette.common.white, 0.02)
        : theme.palette.grey[50],
    },
    '&:hover': {
      backgroundColor: isDark
        ? alpha(theme.palette.common.white, 0.06)
        : theme.palette.grey[100],
    },
    transition: 'background-color 120ms ease-in-out',
  };
});
