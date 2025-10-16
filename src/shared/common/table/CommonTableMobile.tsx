import React, { memo } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useMobileTable } from '@shared/common/table/hooks/useMobileTable';
import CommonTableEmptyState from '@shared/common/table/CommonTableEmptyState';

interface CommonTableMobileProps<T> {
  data: T[];
  loading?: boolean;
  getRowId?: (row: T, index: number) => string | number;
  renderMobileCard: (
    row: T,
    index: number,
    options: { expanded: boolean; toggle: () => void }
  ) => React.ReactNode;
  renderStickySummary?: () => React.ReactNode;
  loadMore?: () => void;
  hasMore?: boolean;
  batchSize?: number;
}

function CommonTableMobile<T>({
  data,
  loading,
  getRowId,
  renderMobileCard,
  renderStickySummary,
  loadMore,
  hasMore = false,
  batchSize = 20,
}: CommonTableMobileProps<T>) {
  const { containerRef, expandedMap, toggleExpanded, renderedCount } =
    useMobileTable({
      data,
      getRowId,
      batchSize,
      hasMore,
      loading,
      loadMore,
    });

  if (!data.length && !loading) {
    return (
      <Box p={2}>
        <CommonTableEmptyState message="No data" />
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      height={480}
      overflow="auto"
      position="relative"
      sx={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {renderStickySummary && (
        <Box
          position="sticky"
          top={0}
          zIndex={1}
          bgcolor="background.paper"
          borderBottom="1px solid"
          borderColor="divider"
        >
          {renderStickySummary()}
        </Box>
      )}

      <Box display="flex" flexDirection="column" gap={1} p={1}>
        {data.slice(0, renderedCount).map((row, index) => {
          const key = getRowId ? getRowId(row, index) : index;
          const expanded = !!expandedMap[key];
          return (
            <Box key={key} sx={{ m: '8px 0' }}>
              {renderMobileCard(row, index, {
                expanded,
                toggle: () => toggleExpanded(key),
              })}
            </Box>
          );
        })}
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" py={2}>
          <CircularProgress size={24} />
        </Box>
      )}
    </Box>
  );
}

// Preserve generics when memoizing so consumers can pass T safely
const MemoizedCommonTableMobile = memo(CommonTableMobile) as <T>(
  props: CommonTableMobileProps<T>
) => React.ReactElement;

export default MemoizedCommonTableMobile;
