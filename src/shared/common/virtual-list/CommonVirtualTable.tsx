import React from 'react';
import { Box } from '@mui/material';
import CommonVirtualList, { KeyExtractor } from './CommonVirtualList';

export interface CommonVirtualTableProps<RowType> {
  readonly items: readonly RowType[];
  readonly height: number;
  readonly rowHeight: number;
  readonly gridTemplateColumns: string; // e.g. '1fr 2fr 1fr'
  readonly keyExtractor?: KeyExtractor<RowType>;
  readonly overscanCount?: number;
  readonly className?: string;

  // header
  readonly stickyHeader?: boolean;
  readonly includeHeaderInHeight?: boolean;
  readonly headerHeight?: number;
  readonly renderHeader: () => React.ReactNode;

  // row renderer
  readonly renderRow: (row: RowType, index: number) => React.ReactNode;
}

export function CommonVirtualTable<RowType>(
  props: CommonVirtualTableProps<RowType>
) {
  const {
    items,
    height,
    rowHeight,
    gridTemplateColumns,
    keyExtractor,
    overscanCount,
    className,
    stickyHeader = true,
    includeHeaderInHeight = true,
    headerHeight = 40,
    renderHeader,
    renderRow,
  } = props;

  const listHeight = includeHeaderInHeight
    ? Math.max(0, height - headerHeight)
    : height;

  return (
    <Box className={className} width="100%">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          position: stickyHeader ? 'sticky' : 'static',
          top: 0,
          zIndex: stickyHeader ? 1 : 'auto',
          bgcolor: 'background.paper',
          height: includeHeaderInHeight ? headerHeight : 'auto',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns,
            px: 2,
            py: 1,
            typography: 'subtitle2',
          }}
        >
          {renderHeader()}
        </Box>
      </Box>

      <CommonVirtualList<RowType>
        items={items}
        height={listHeight}
        itemSize={rowHeight}
        keyExtractor={keyExtractor}
        overscanCount={overscanCount}
        useItemButton={false}
        renderItem={(row, index) => (
          <Box sx={{ display: 'grid', gridTemplateColumns, px: 2 }}>
            {renderRow(row, index)}
          </Box>
        )}
      />
    </Box>
  );
}

export default CommonVirtualTable;
