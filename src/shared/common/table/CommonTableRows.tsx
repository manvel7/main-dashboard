import React from 'react';
import {
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Box,
} from '@mui/material';
import CommonTableEmptyState from '@shared/common/table/CommonTableEmptyState';

interface TableRowsProps<T> {
  data: T[];
  loading?: boolean;
  renderRow: (row: T, index: number) => React.ReactNode;
  getRowId?: (row: T, index: number) => string | number;
  renderActions?: (row: T, index: number) => React.ReactNode;
}

function CommonTableRows<T>({
  data,
  renderRow,
  getRowId,
  renderActions,
  loading,
}: TableRowsProps<T>) {
  if (loading) {
    return (
      <TableRow>
        <TableCell colSpan={10}>
          <Box display="flex" justifyContent="center" py={6}>
            <CircularProgress />
          </Box>
        </TableCell>
      </TableRow>
    );
  }

  if (!data.length && !loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={10}>
            <CommonTableEmptyState message="No users found" />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  return (
    <TableBody>
      {data.map((row, index) => (
        <TableRow
          key={getRowId ? getRowId(row, index) : index}
          sx={{
            '&:nth-of-type(odd)': { backgroundColor: 'grey.50' },
            '&:hover': { backgroundColor: 'grey.100' },
          }}
        >
          {renderRow(row, index)}
          {renderActions && (
            <TableCell align="right">{renderActions(row, index)}</TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}
export default CommonTableRows;
