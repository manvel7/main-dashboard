import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  TableCell,
} from "@mui/material";
import CommonTableRows from "@shared/common/table/CommonTableRows";
import { useCommonTable } from "@shared/common/table/hooks/useCommonTable";
import CommonTablePagination from "@shared/common/table/CommonTablePagination";

interface CommonTableProps<T> {
  data: T[];
  renderHeader: () => React.ReactNode;
  renderRow: (row: T, index: number) => React.ReactNode;
  rowsPerPageOptions?: number[];
  getRowId?: (row: T, index: number) => string | number;
  renderActions?: (row: T, index: number) => React.ReactNode;
  loading?: boolean;
}

function CommonTable<T>({
  data,
  renderHeader,
  renderRow,
  rowsPerPageOptions = [5, 10, 25],
  getRowId,
  renderActions,
  loading
}: CommonTableProps<T>) {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData,
  } = useCommonTable({ data, rowsPerPageOptions });

  return (
    <Paper
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <TableContainer sx={{ borderRadius: "inherit" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "primary.main",
                "& th:first-of-type": { borderTopLeftRadius: 16 },
                "& th:last-of-type": { borderTopRightRadius: 16 },
              }}
            >
              {renderHeader()}
              {renderActions && <TableCell sx={{ textAlign: 'end' }}>Actions</TableCell>}
            </TableRow>
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
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CommonTable;
