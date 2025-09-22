import { useMemo } from 'react';

export function useCommonTableData<T>({
  data,
  page,
  rowsPerPage,
  mobileInfiniteScroll,
}: {
  data: T[];
  page: number;
  rowsPerPage: number;
  mobileInfiniteScroll: boolean;
}) {
  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [data, page, rowsPerPage]);

  const accumulatedData = useMemo(() => {
    if (!mobileInfiniteScroll) return paginatedData;
    const end = (page + 1) * rowsPerPage;
    return data.slice(0, end);
  }, [mobileInfiniteScroll, paginatedData, data, page, rowsPerPage]);

  return { paginatedData, accumulatedData };
}
