import React from 'react';
import {
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Box,
} from '@mui/material';
import { TableBodyRow } from '@shared/common/table/styles';
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
        <TableBodyRow key={getRowId ? getRowId(row, index) : index}>
          {renderRow(row, index)}
          {renderActions && (
            <TableCell align="right">{renderActions(row, index)}</TableCell>
          )}
        </TableBodyRow>
      ))}
    </TableBody>
  );
}
export default CommonTableRows;
