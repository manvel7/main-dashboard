import { useState, useEffect, useCallback, useMemo } from 'react';
// ------ constants dateRange ---------
import {
  DEFAULT_TIMEZONE_ID,
  getPeriods,
  QuickSelectOption,
  TIME_RANGE_OPTIONS,
} from '@shared/common/dateRange/constants';

export interface DateTimeRange {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  timeZoneId: string;
}

/**
 * ✅ Hook: Handles full date/time range logic with quick select
 */
export function useDateTimeRange() {
  const [range, setRange] = useState<DateTimeRange>({
    startDate: '',
    endDate: '',
    startTime: '00:00',
    endTime: '23:59',
    timeZoneId: DEFAULT_TIMEZONE_ID,
  });

  const [activeOption, setActiveOption] = useState<QuickSelectOption>(
    TIME_RANGE_OPTIONS.YESTERDAY
  );
  const [error, setError] = useState<string | null>(null);

  // ✅ Memoized periods to avoid recomputation
  const periods = useMemo(() => getPeriods(DEFAULT_TIMEZONE_ID), []);

  // ✅ Apply quick select
  const applyQuickSelect = useCallback(
    (option: QuickSelectOption) => {
      const currentPeriod = periods[option];
      if (!currentPeriod) return;

      setRange({
        startDate: currentPeriod.start.format('YYYY-MM-DD'),
        endDate: currentPeriod.end.format('YYYY-MM-DD'),
        startTime: '00:00',
        endTime: '23:59',
        timeZoneId: DEFAULT_TIMEZONE_ID,
      });
      setError(null); // Reset error when quick-select is applied
    },
    [periods]
  );

  // ✅ Apply default on mount
  useEffect(() => {
    applyQuickSelect(activeOption);
  }, [activeOption, applyQuickSelect]);

  // ✅ Select handler
  const handleSelect = useCallback(
    (option: QuickSelectOption) => {
      setActiveOption(option);
      applyQuickSelect(option);
    },
    [applyQuickSelect]
  );

  // ✅ Change handler for individual fields
  const handleChange = useCallback(
    (field: keyof DateTimeRange, value: string) => {
      setRange((prev) => {
        const newRange = { ...prev, [field]: value };

        // Validation
        if (!newRange.startDate || !newRange.endDate) {
          setError('Both start and end dates are required.');
        } else {
          const start = new Date(`${newRange.startDate}T${newRange.startTime}`);
          const end = new Date(`${newRange.endDate}T${newRange.endTime}`);
          setError(
            start > end ? 'Start date/time must be before end date/time.' : null
          );
        }

        return newRange;
      });
    },
    []
  );

  // ✅ Formatted range string (memoized)
  const formattedRange = useMemo(() => {
    if (!range.startDate || !range.endDate) return '';
    const formatDate = (d: string) =>
      new Date(d).toLocaleDateString(undefined, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });

    return `${formatDate(range.startDate)} ${range.startTime} → ${formatDate(
      range.endDate
    )} ${range.endTime} (${range.timeZoneId})`;
  }, [range]);

  // ✅ Apply action (can be replaced with API call)
  const handleApply = useCallback(() => {
    console.log('Applied range:', range);
  }, [range]);

  return {
    range,
    error,
    activeOption,
    handleChange,
    handleSelect,
    formattedRange,
    applyQuickSelect,
    handleApply,
  };
}
