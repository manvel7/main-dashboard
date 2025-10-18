import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);

export const DEFAULT_TIMEZONE_ID = 'America/Los_Angeles';

// ✅ Time range options (type-safe, no runtime overhead)
export const TIME_RANGE_OPTIONS = {
  TODAY: 'today',
  YESTERDAY: 'yesterday',
  THIS_WEEK: 'thisWeek',
  LAST_WEEK: 'lastWeek',
  LAST_7_DAYS: 'last7Days',
  THIS_MONTH: 'thisMonth',
  LAST_MONTH: 'lastMonth',
  LAST_30_DAYS: 'last30Days',
} as const;

export type QuickSelectOption =
  (typeof TIME_RANGE_OPTIONS)[keyof typeof TIME_RANGE_OPTIONS];

// ---------- Quick Select Options ----------
export const quickOptions: { label: string; value: QuickSelectOption }[] = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'This Week', value: 'thisWeek' },
  { label: 'Last Week', value: 'lastWeek' },
  { label: 'Last 7 Days', value: 'last7Days' },
  { label: 'This Month', value: 'thisMonth' },
  { label: 'Last Month', value: 'lastMonth' },
  { label: 'Last 30 Days', value: 'last30Days' },
];

/**
 * ✅ Returns predefined time periods, timezone-aware
 */
export const getPeriods = (timeZoneId: string = DEFAULT_TIMEZONE_ID) => {
  const now = dayjs().tz(timeZoneId);
  const Tz = (d: dayjs.Dayjs) => d.tz(timeZoneId);

  return {
    [TIME_RANGE_OPTIONS.TODAY]: {
      start: Tz(now).startOf('day'),
      end: Tz(now).endOf('day'),
    },
    [TIME_RANGE_OPTIONS.YESTERDAY]: {
      start: Tz(now).subtract(1, 'day').startOf('day'),
      end: Tz(now).subtract(1, 'day').endOf('day'),
    },
    [TIME_RANGE_OPTIONS.THIS_WEEK]: {
      start: Tz(now).startOf('isoWeek'),
      end: Tz(now).endOf('isoWeek'),
    },
    [TIME_RANGE_OPTIONS.LAST_WEEK]: {
      start: Tz(now).subtract(1, 'week').startOf('isoWeek'),
      end: Tz(now).subtract(1, 'week').endOf('isoWeek'),
    },
    [TIME_RANGE_OPTIONS.LAST_7_DAYS]: {
      start: Tz(now).subtract(6, 'day').startOf('day'),
      end: Tz(now).endOf('day'),
    },
    [TIME_RANGE_OPTIONS.THIS_MONTH]: {
      start: Tz(now).startOf('month'),
      end: Tz(now).endOf('month'),
    },
    [TIME_RANGE_OPTIONS.LAST_MONTH]: {
      start: Tz(now).subtract(1, 'month').startOf('month'),
      end: Tz(now).subtract(1, 'month').endOf('month'),
    },
    [TIME_RANGE_OPTIONS.LAST_30_DAYS]: {
      start: Tz(now).subtract(29, 'day').startOf('day'),
      end: Tz(now).endOf('day'),
    },
  } as const;
};
