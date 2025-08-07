import React from 'react';
import {
  Controller,
  useFormContext,
  FieldError,
  FieldErrors,
} from 'react-hook-form';
import get from 'lodash/get';
import {
  FormControl,
  FormHelperText,
} from '@mui/material';

type FormValue = string | number | string[] | undefined;
type FormError = FieldError | FieldErrors | undefined;

interface SelectRenderPropParams<TRef = unknown> {
  value: FormValue;
  onChange: (value: FormValue) => void;
  onBlur: () => void;
  ref: React.Ref<TRef>;
  hasError: boolean;
  error?: FormError;
  label?: string;
}

interface CustomSelectProps<TRef = unknown> {
  name: string;
  label?: string;
  maxWidth?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  children: (props: SelectRenderPropParams<TRef>) => React.ReactNode;
}

function CustomSelect<TRef = unknown>({
  name,
  label,
  variant = 'outlined',
  maxWidth = '100%',
  children,
}: CustomSelectProps<TRef>) {
  const { control, formState } = useFormContext();
  const error = get(formState.errors, name);
  const hasError = Boolean(error);

  return (
    <FormControl
      fullWidth
      error={hasError}
      style={{ maxWidth }}
      variant={variant}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const { value, onChange, onBlur, ref } = field;

          return children({
            value: value ?? undefined,
            onChange,
            onBlur,
            ref,
            hasError,
            error,
            label,
          }) as React.ReactElement;
        }}
      />

      {hasError && (
        <FormHelperText>{error?.message?.toString()}</FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomSelect;
