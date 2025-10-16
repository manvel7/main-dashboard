import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Box, Menu, Paper, Typography, ListItemButton } from '@mui/material';

export type KeyExtractor<ItemType> = (
  item: ItemType,
  index: number
) => string | number;

export interface CommonVirtualListProps<ItemType> {
  readonly items: readonly ItemType[];
  readonly height: number;
  readonly itemSize: number;
  readonly width?: number | string;
  readonly renderItem: (
    item: ItemType,
    index: number,
    options: { selected: boolean; disabled: boolean }
  ) => React.ReactNode;
  readonly keyExtractor?: KeyExtractor<ItemType>;
  readonly overscanCount?: number;
  readonly className?: string;
  readonly emptyPlaceholder?: React.ReactNode;

  // selection
  readonly selectedIds?: ReadonlyArray<string | number>;
  readonly onItemClick?: (item: ItemType, index: number) => void;
  readonly isItemDisabled?: (item: ItemType, index: number) => boolean;

  // select menu mode
  readonly selectModeProps?: {
    readonly open: boolean;
    readonly anchorEl: HTMLElement | null;
    readonly onClose: () => void;
    readonly paperWidth?: number;
    readonly maxMenuHeight?: number;
  };

  // row wrapper control
  readonly useItemButton?: boolean; // when false, rows are rendered as plain Box for strict alignment
}

function DefaultEmpty() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={160}
      sx={{ color: 'text.secondary' }}
    >
      <Typography variant="body2">No data</Typography>
    </Box>
  );
}

export function CommonVirtualList<ItemType>(
  props: CommonVirtualListProps<ItemType>
) {
  const {
    items,
    height,
    itemSize,
    width = '100%',
    renderItem,
    keyExtractor,
    overscanCount = 5,
    className,
    emptyPlaceholder,
    selectedIds,
    onItemClick,
    isItemDisabled,
    selectModeProps,
    useItemButton = true,
  } = props;

  const list = (
    <Box width={width} className={className}>
      {items.length === 0 ? (
        (emptyPlaceholder ?? <DefaultEmpty />)
      ) : (
        <FixedSizeList
          height={height}
          itemCount={items.length}
          itemSize={itemSize}
          width={width}
          overscanCount={overscanCount}
        >
          {({ index, style }: ListChildComponentProps) => {
            const item = items[index];
            const id = keyExtractor ? keyExtractor(item, index) : index;
            const selected = !!selectedIds?.includes(id);
            const disabled = !!isItemDisabled?.(item, index);

            if (useItemButton) {
              return (
                <ListItemButton
                  key={id}
                  style={style}
                  disabled={disabled}
                  selected={selected}
                  onClick={
                    onItemClick ? () => onItemClick(item, index) : undefined
                  }
                >
                  {renderItem(item, index, { selected, disabled })}
                </ListItemButton>
              );
            }

            return (
              <Box key={id} style={style}>
                {renderItem(item, index, { selected, disabled })}
              </Box>
            );
          }}
        </FixedSizeList>
      )}
    </Box>
  );

  if (selectModeProps) {
    const { open, anchorEl, onClose, paperWidth, maxMenuHeight } =
      selectModeProps;
    return (
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        MenuListProps={{ disablePadding: true }}
        PaperProps={{
          sx: {
            width: paperWidth ?? width,
            maxHeight: maxMenuHeight ?? 360,
          },
        }}
      >
        <Paper elevation={0} sx={{ width: '100%' }}>
          {list}
        </Paper>
      </Menu>
    );
  }

  return list;
}

export default CommonVirtualList;
