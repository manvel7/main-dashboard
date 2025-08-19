import React, { ReactElement } from 'react';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import get from 'lodash/get';
import { FormControl, FormControlProps, FormHelperText } from '@mui/material';

type FormValue = string | number | string[] | undefined;

interface SelectRenderPropParams<TRef = unknown> {
  value: FormValue;
  onChange: (value: FormValue) => void;
  onBlur: () => void;
  ref: React.Ref<TRef>;
  hasError: boolean;
  error?: FieldError;
  label?: string;
}

export interface CustomSelectProps<TRef = unknown>
  extends Omit<FormControlProps, 'children'> {
  name: string;
  label?: string;
  maxWidth?: string;
  children: (props: SelectRenderPropParams<TRef>) => ReactElement;
}

function CustomSelect<TRef = unknown>({
  name,
  label,
  maxWidth = '100%',
  variant = 'outlined',
  children,
  ...formControlProps
}: CustomSelectProps<TRef>) {
  const { control, formState } = useFormContext();
  const error = get(formState.errors, name) as FieldError | undefined;
  const hasError = Boolean(error);

  return (
    <FormControl
      fullWidth
      error={hasError}
      style={{ maxWidth }}
      variant={variant}
      {...formControlProps}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          children({
            value: field.value ?? '',
            onChange: field.onChange,
            onBlur: field.onBlur,
            ref: field.ref,
            hasError,
            error,
            label,
          })
        }
      />

      <FormHelperText
        sx={{
          minHeight: '20px',
          margin: 0,
          visibility: hasError ? 'visible' : 'hidden',
        }}
      >
        {hasError ? error?.message : ' '}
      </FormHelperText>
    </FormControl>
  );
}

export default CustomSelect;
