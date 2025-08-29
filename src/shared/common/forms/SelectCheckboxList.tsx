import React from "react";
import { Box, Menu, TextField, InputAdornment } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckboxList from "@shared/common/forms/CheckboxList";
import { useSelectCheckboxList } from "@shared/common/forms/hooks/useSelectCheckboxList";

export type SelectCheckboxItem<T> = {
  id: string | number;
  data: T;
};

export type SelectCheckboxListProps<T> = {
  items: SelectCheckboxItem<T>[];
  labelKey: keyof T;
  label?: string;
  placeholder?: string;
  width?: number;
  onChange?: (selected: SelectCheckboxItem<T>[]) => void;
  onSelectionSummaryChange?: (summary: { count: number; first?: SelectCheckboxItem<T> }) => void;
  onIdsChange?: (ids: Array<string | number>) => void;
  enableSelectAll?: boolean;
  enableSearch?: boolean;
  height?: number;
  itemHeight?: number;
  renderItem?: (item: SelectCheckboxItem<T>, checked: boolean) => React.ReactNode;
};

function SelectCheckboxList<T>({
  items,
  labelKey,
  label,
  placeholder,
  width = 360,
  onChange,
  onIdsChange,
  enableSelectAll,
  enableSearch,
  height,
  itemHeight,
  renderItem,
}: SelectCheckboxListProps<T>) {
  const { state, actions, derived } = useSelectCheckboxList<T>({ placeholder, labelKey });

  return (
    <Box>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        label={label}
        value={derived.selectedLabel}
        onClick={actions.handleOpen}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <ArrowDropDownIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{
          'aria-expanded': state.open ? 'true' : 'false',
        }}
      />
      <Menu
        anchorEl={state.anchorEl}
        open={state.open}
        onClose={actions.handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: { mt: 0.5, maxHeight: 420 },
          },
        }}
      >
        <Box p={1} width={width} maxWidth={width}>
          <CheckboxList
            items={items}
            labelKey={labelKey}
            onChange={onChange}
            onSelectionSummaryChange={actions.handleSummaryChange}
            onIdsChange={onIdsChange}
            enableSelectAll={enableSelectAll}
            enableSearch={enableSearch}
            height={height}
            itemHeight={itemHeight}
            renderItem={renderItem}
          />
        </Box>
      </Menu>
    </Box>
  );
}

export default SelectCheckboxList;


