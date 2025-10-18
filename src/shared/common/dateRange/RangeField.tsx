import React, { memo } from 'react';
// --------- Dayjs -----------
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// ------- Styled ------------
import { TextField } from '@mui/material';

interface RangeFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: 'date' | 'time';
}

export const RangeField: React.FC<RangeFieldProps> = memo(
  ({ label, value, onChange, type = 'date' }) => {
    if (type === 'date') {
      const dateValue: Dayjs | null = value ? dayjs(value) : null;

      return (
        <DatePicker
          label={label}
          value={dateValue}
          onChange={(newVal) =>
            onChange(newVal ? newVal.format('YYYY-MM-DD') : '')
          }
          slotProps={{
            textField: {
              fullWidth: true,
            },
          }}
        />
      );
    }

    return (
      <TextField
        label={label}
        type="time"
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
    );
  }
);
