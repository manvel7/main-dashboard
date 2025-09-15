import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonTableMobile from '@shared/common/table/CommonTableMobile';

interface MobileTableWrapperProps<T> {
  data: T[];
  accumulatedData: T[];
  getRowId?: (row: T, index: number) => string | number;
  loading?: boolean;
  renderMobileCard: (
    row: T,
    index: number,
    options: { expanded: boolean; toggle: () => void }
  ) => React.ReactNode;
  renderMobileStickySummary?: () => React.ReactNode;
  mobileBreakpoint?: 'xs' | 'sm' | 'md' | number;
  mobileInfiniteScroll?: boolean;
  page: number;
  rowsPerPage: number;
  handleLoadMore?: () => void;
}

export function MobileTableWrapper<T>({
  data,
  accumulatedData,
  getRowId,
  loading,
  renderMobileCard,
  renderMobileStickySummary,
  mobileBreakpoint = 'md',
  mobileInfiniteScroll = false,
  page,
  rowsPerPage,
  handleLoadMore,
}: MobileTableWrapperProps<T>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint));

  if (!isMobile) return null;

  return (
    <CommonTableMobile
      data={accumulatedData}
      getRowId={getRowId}
      loading={loading}
      renderMobileCard={renderMobileCard}
      renderStickySummary={
        mobileInfiniteScroll ? undefined : renderMobileStickySummary
      }
      batchSize={rowsPerPage}
      hasMore={
        mobileInfiniteScroll ? accumulatedData.length < data.length : undefined
      }
      loadMore={mobileInfiniteScroll ? handleLoadMore : undefined}
    />
  );
}
