import React from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from '@mui/material';
import { TableHeaderRow } from '@shared/common/table/styles';
import CommonTableRows from '@shared/common/table/CommonTableRows';
import CommonTablePagination from '@shared/common/table/CommonTablePagination';

interface DesktopTableProps<T> {
  paginatedData: T[];
  dataLength: number;
  renderHeader: () => React.ReactNode;
  renderRow: (row: T, index: number) => React.ReactNode;
  getRowId?: (row: T, index: number) => string | number;
  renderActions?: (row: T, index: number) => React.ReactNode;
  loading?: boolean;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DesktopTable<T>({
  paginatedData,
  dataLength,
  renderHeader,
  renderRow,
  getRowId,
  renderActions,
  loading,
  page,
  rowsPerPage,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
}: DesktopTableProps<T>) {
  return (
    <Paper sx={{ borderRadius: 2, boxShadow: 6, overflow: 'hidden' }}>
      <TableContainer sx={{ borderRadius: 'inherit' }}>
        <Table>
          <TableHead>
            <TableHeaderRow>
              {renderHeader()}
              {renderActions && (
                <TableCell sx={{ textAlign: 'end' }}>Actions</TableCell>
              )}
            </TableHeaderRow>
          </TableHead>

          <CommonTableRows
            data={paginatedData}
            renderRow={renderRow}
            getRowId={getRowId}
            renderActions={renderActions}
            loading={loading}
          />
        </Table>
      </TableContainer>

      <CommonTablePagination
        count={dataLength}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
}
