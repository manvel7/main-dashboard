import { useMemo } from 'react';
import { useCommonTable } from '@shared/common/table/hooks/useCommonTable';

export function useCommonTableData<T>({
  data,
  rowsPerPageOptions,
  page,
  rowsPerPage,
  mobileInfiniteScroll,
}: {
  data: T[];
  rowsPerPageOptions: number[];
  page: number;
  rowsPerPage: number;
  mobileInfiniteScroll: boolean;
}) {
  const { paginatedData } = useCommonTable({ data, rowsPerPageOptions });

  const accumulatedData = useMemo(() => {
    if (!mobileInfiniteScroll) return paginatedData;
    const end = (page + 1) * rowsPerPage;
    return data.slice(0, end);
  }, [mobileInfiniteScroll, paginatedData, data, page, rowsPerPage]);

  return { paginatedData, accumulatedData };
}
