import React, { ReactElement } from 'react';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import get from 'lodash/get';
import { FormControl, FormControlProps, FormHelperText } from '@mui/material';

type FormValue = boolean | undefined;

interface CheckboxRenderPropParams<TRef = unknown> {
  value: FormValue;
  onChange: (value: FormValue) => void;
  onBlur: () => void;
  ref: React.Ref<TRef>;
  hasError: boolean;
  error?: FieldError;
  label?: string;
}

export interface CustomCheckboxProps<TRef = unknown>
  extends Omit<FormControlProps, 'children'> {
  name: string;
  label?: string;
  maxWidth?: string;
  children: (props: CheckboxRenderPropParams<TRef>) => ReactElement;
}

function CustomCheckbox<TRef = unknown>({
  name,
  label,
  maxWidth = '100%',
  variant = 'outlined',
  children,
  ...formControlProps
}: CustomCheckboxProps<TRef>) {
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
            value: field.value ?? false,
            onChange: field.onChange,
            onBlur: field.onBlur,
            ref: field.ref,
            hasError,
            error,
            label,
          })
        }
      />

      {hasError && error?.message && (
        <FormHelperText>{error.message}</FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomCheckbox;
