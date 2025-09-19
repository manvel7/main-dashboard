import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {
  Checkbox,
  TextField,
  ListItemText,
  ListItemIcon,
  FormControlLabel,
  Box,
  Typography,
  ListItemButton,
} from '@mui/material';
import { useCheckboxList } from '@shared/common/forms/hooks/useCheckboxList';

type CheckboxItem<T> = {
  id: string | number;
  data: T;
};

type CheckboxListProps<T> = {
  items: CheckboxItem<T>[];
  labelKey: keyof T;
  onChange?: (selectedItems: CheckboxItem<T>[]) => void;
  onSelectionSummaryChange?: (summary: {
    count: number;
    first?: CheckboxItem<T>;
  }) => void;
  onIdsChange?: (ids: Array<string | number>) => void;
  enableSelectAll?: boolean;
  enableSearch?: boolean;
  renderItem?: (item: CheckboxItem<T>, checked: boolean) => React.ReactNode;
  height?: number;
  itemHeight?: number;
};

function CheckboxList<T>({
  items,
  labelKey,
  onChange,
  onSelectionSummaryChange,
  onIdsChange,
  enableSelectAll = true,
  enableSearch = true,
  renderItem,
  height = 400,
  itemHeight = 50,
}: CheckboxListProps<T>) {
  const { state, actions, flags } = useCheckboxList<T>({
    items,
    labelKey,
    enableSelectAll,
    enableSearch,
    onChange,
    onSelectionSummaryChange,
    onIdsChange,
  });

  // Row renderer (correctly typed)
  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = state.filteredItems[index];
    const checked = actions.isChecked(item.id);

    return (
      <ListItemButton
        style={style}
        key={item.id}
        onClick={() => actions.toggleItem(item.id)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        {renderItem ? (
          renderItem(item, checked)
        ) : (
          <ListItemText primary={String(item.data[labelKey])} />
        )}
      </ListItemButton>
    );
  };


  return (
    <Box width="100%">
      {flags.enableSearch && (
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Search..."
          value={state.search}
          onChange={(e) => actions.setSearch(e.target.value)}
          sx={{ mb: 1 }}
        />
      )}

      {flags.enableSelectAll && (
        (() => {
          const totalCount = state.filteredItems.length;
          const selectedCount = state.selected.size;
          const allChecked = state.selectAll
            ? totalCount > 0 && selectedCount === 0
            : totalCount > 0 && selectedCount === totalCount;
          const indeterminate =
            totalCount > 0 && selectedCount > 0 && selectedCount < totalCount;
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={allChecked}
                  indeterminate={indeterminate}
                  onChange={actions.toggleSelectAll}
                />
              }
              label={
                <Typography variant="body2" noWrap>
                  Select All
                </Typography>
              }
              sx={{
                ml: 0.7,
                '& .MuiFormControlLabel-label': { whiteSpace: 'nowrap' },
              }}
            />
          );
        })()
      )}

      <FixedSizeList
        height={height}
        itemCount={state.filteredItems.length}
        itemSize={itemHeight}
        width="100%"
      >
        {Row}
      </FixedSizeList>
    </Box>
  );
}

export default CheckboxList;
