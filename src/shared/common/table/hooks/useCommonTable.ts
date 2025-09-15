import React from 'react';

interface UseCommonTableProps<T> {
  data: T[];
  rowsPerPageOptions?: number[];
  initialRowsPerPage?: number;
  layoutKey?: unknown; // changes trigger pagination reset (e.g., mobile/desktop switch)
}

export const useCommonTable = <T>({
  data,
  rowsPerPageOptions = [5, 10, 25],
  initialRowsPerPage,
  layoutKey,
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

  // Reset page when layout changes (e.g., mobile <-> desktop)
  React.useEffect(() => {
    setPage(0);
  }, [layoutKey]);

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData,
    rowsPerPageOptions,
  };
};
