import { useCallback, useMemo, useState } from "react";

export function useSelectCheckboxList<T>(
  params: {
    placeholder?: string;
    labelKey: keyof T;
  }
) {
  const { placeholder, labelKey } = params;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [firstLabel, setFirstLabel] = useState<string>("");

  const open = Boolean(anchorEl);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleSummaryChange = useCallback(
    (summary: { count: number; first?: { data: T } }) => {
      setSelectedCount(summary.count);
      const label = summary.first ? String((summary.first.data as any)?.[labelKey] ?? "") : "";
      setFirstLabel(label);
    },
    [labelKey]
  );

  const selectedLabel = useMemo(() => {
    if (!selectedCount) return placeholder ?? "Select items";
    const rest = selectedCount - 1;
    return rest > 0 ? `${firstLabel} (+${rest})` : firstLabel;
  }, [selectedCount, firstLabel, placeholder]);

  return {
    state: { anchorEl, open, selectedCount, firstLabel },
    actions: { handleOpen, handleClose, handleSummaryChange },
    derived: { selectedLabel },
  } as const;
}


