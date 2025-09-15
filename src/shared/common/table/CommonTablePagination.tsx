import React from "react";
import { TablePagination } from "@mui/material";

interface CommonTablePaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CommonTablePagination({
  count,
  page,
  rowsPerPage,
  rowsPerPageOptions = [5, 10, 25],
  onPageChange,
  onRowsPerPageChange,
}: CommonTablePaginationProps) {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={rowsPerPageOptions}
      sx={{
        borderTop: "1px solid rgba(224, 224, 224, 1)",
        "& .MuiTablePagination-toolbar": { minHeight: 56 },
      }}
    />
  );
}
export default CommonTablePagination;
