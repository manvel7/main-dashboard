import { useCallback, useMemo, useState } from 'react';
import { useDebounce } from '@/shared/hooks/useDebounce';

export type CheckboxItem<T> = {
  id: string | number;
  data: T;
};

export type UseCheckboxListParams<T> = {
  items: CheckboxItem<T>[];
  labelKey: keyof T;
  enableSelectAll?: boolean;
  enableSearch?: boolean;
  onChange?: (selectedItems: CheckboxItem<T>[]) => void;
  onSelectionSummaryChange?: (summary: {
    count: number;
    first?: CheckboxItem<T>;
  }) => void;
  onIdsChange?: (ids: Array<string | number>) => void;
};

export function useCheckboxList<T>({
  items,
  labelKey,
  enableSelectAll = true,
  enableSearch = true,
  onChange,
  onSelectionSummaryChange,
  onIdsChange,
}: UseCheckboxListParams<T>) {
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 300);
  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        String(item.data[labelKey])
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
      ),
    [items, debouncedSearch, labelKey]
  );

  const emitSummary = useCallback(
    (currentSelected: Set<string | number>, currentSelectAll: boolean) => {
      if (!onSelectionSummaryChange) return;
      if (currentSelectAll) {
        const count = filteredItems.length - currentSelected.size;
        let first: CheckboxItem<T> | undefined = undefined;
        for (const item of filteredItems) {
          if (!currentSelected.has(item.id)) {
            first = item;
            break;
          }
        }
        onSelectionSummaryChange({ count, first });
      } else {
        const count = currentSelected.size;
        let first: CheckboxItem<T> | undefined = undefined;
        if (count > 0) {
          for (const item of filteredItems) {
            if (currentSelected.has(item.id)) {
              first = item;
              break;
            }
          }
        }
        onSelectionSummaryChange({ count, first });
      }
    },
    [filteredItems, onSelectionSummaryChange]
  );

  const toggleItem = useCallback(
    (id: string | number) => {
      const newSelected = new Set(selected);
      if (selectAll) {
        if (newSelected.has(id)) {
          newSelected.delete(id);
        } else {
          newSelected.add(id);
        }
        setSelected(newSelected);
        emitSummary(newSelected, true);
        if (onIdsChange) {
          const ids = filteredItems
            .filter((item) => !newSelected.has(item.id))
            .map((it) => it.id);
          onIdsChange(ids);
        }
        const MAX_ONCHANGE_ITEMS = 20000;
        if (filteredItems.length <= MAX_ONCHANGE_ITEMS) {
          const selectedItems = filteredItems.filter(
            (item) => !newSelected.has(item.id)
          );
          onChange?.(selectedItems);
        }
        return;
      }
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      setSelected(newSelected);
      emitSummary(newSelected, false);
      if (onIdsChange) {
        const ids = Array.from(newSelected);
        onIdsChange(ids);
      }
      const MAX_ONCHANGE_ITEMS = 20000;
      if (newSelected.size <= MAX_ONCHANGE_ITEMS) {
        onChange?.(items.filter((item) => newSelected.has(item.id)));
      }
    },
    [
      selected,
      selectAll,
      filteredItems,
      onIdsChange,
      onChange,
      items,
      emitSummary,
    ]
  );

  const toggleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectAll(false);
      setSelected(new Set());
      emitSummary(new Set(), false);
      if (onIdsChange) {
        onIdsChange([]);
      }
      onChange?.([]);
    } else {
      setSelectAll(true);
      setSelected(new Set());
      emitSummary(new Set(), true);
      if (onIdsChange) {
        const ids = filteredItems.map((it) => it.id);
        onIdsChange(ids);
      }
      const MAX_ONCHANGE_ITEMS = 20000;
      if (filteredItems.length <= MAX_ONCHANGE_ITEMS) {
        onChange?.(filteredItems);
      }
    }
  }, [selectAll, filteredItems, onIdsChange, onChange, emitSummary]);

  const isChecked = useCallback(
    (id: string | number) => (selectAll ? !selected.has(id) : selected.has(id)),
    [selectAll, selected]
  );

  return {
    state: {
      selected,
      selectAll,
      search,
      filteredItems,
    },
    actions: {
      setSearch,
      toggleItem,
      toggleSelectAll,
      isChecked,
    },
    flags: {
      enableSelectAll,
      enableSearch,
    },
  };
}
