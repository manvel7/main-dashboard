import React from "react";

interface UseCommonTableProps<T> {
  data: T[];
  rowsPerPageOptions?: number[];
  initialRowsPerPage?: number;
}

export const useCommonTable = <T>({
  data,
  rowsPerPageOptions = [5, 10, 25],
  initialRowsPerPage,
}: UseCommonTableProps<T>) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    initialRowsPerPage || rowsPerPageOptions[0]
  );

  // Handler for page change
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handler for rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginated data
  const paginatedData = React.useMemo(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [data, page, rowsPerPage]);

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData,
    rowsPerPageOptions,
  };
};
