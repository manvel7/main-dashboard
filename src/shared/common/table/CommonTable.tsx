import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { DesktopTable } from '@shared/common/table/DesktopTable';
import { useCommonTable } from '@shared/common/table/hooks/useCommonTable';
import { MobileTableWrapper } from '@shared/common/table/MobileTableWrapper';
import { useCommonTableData } from '@shared/common/table/hooks/useCommonTableData';

interface CommonTableProps<T> {
  data: T[];
  renderHeader: () => React.ReactNode;
  renderRow: (row: T, index: number) => React.ReactNode;
  rowsPerPageOptions?: number[];
  getRowId?: (row: T, index: number) => string | number;
  renderActions?: (row: T, index: number) => React.ReactNode;
  loading?: boolean;

  // Mobile
  enableMobileCards?: boolean;
  renderMobileCard?: (
    row: T,
    index: number,
    options: { expanded: boolean; toggle: () => void }
  ) => React.ReactNode;
  renderMobileStickySummary?: () => React.ReactNode;
  mobileBreakpoint?: 'xs' | 'sm' | 'md' | number;
  mobileInfiniteScroll?: boolean;
}

export function CommonTable<T>({
  data,
  renderHeader,
  renderRow,
  rowsPerPageOptions = [5, 10, 25],
  getRowId,
  renderActions,
  loading,
  enableMobileCards = true,
  renderMobileCard,
  renderMobileStickySummary,
  mobileBreakpoint = 'sm',
  mobileInfiniteScroll = false,
}: CommonTableProps<T>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint));
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    useCommonTable({ data, rowsPerPageOptions, layoutKey: isMobile });

  const { paginatedData, accumulatedData } = useCommonTableData({
    data,
    page,
    rowsPerPage,
    mobileInfiniteScroll,
  });

  // Mobile
  if (enableMobileCards && isMobile && renderMobileCard) {
    return (
      <MobileTableWrapper
        data={data}
        accumulatedData={accumulatedData}
        getRowId={getRowId}
        loading={loading}
        renderMobileCard={renderMobileCard}
        renderMobileStickySummary={renderMobileStickySummary}
        mobileBreakpoint={mobileBreakpoint}
        mobileInfiniteScroll={mobileInfiniteScroll}
        page={page}
        rowsPerPage={rowsPerPage}
        handleLoadMore={() => handleChangePage(null, page + 1)}
      />
    );
  }

  // Desktop
  return (
    <DesktopTable
      paginatedData={paginatedData}
      dataLength={data.length}
      renderHeader={renderHeader}
      renderRow={renderRow}
      getRowId={getRowId}
      renderActions={renderActions}
      loading={loading}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
