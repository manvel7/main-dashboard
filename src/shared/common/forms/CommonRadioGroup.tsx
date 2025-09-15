import React, { ReactElement } from 'react';
import get from 'lodash/get';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import { FormControl, FormControlProps, FormHelperText } from '@mui/material';

type FormValue = string | number | undefined;

interface RadioGroupRenderPropParams<TRef = unknown> {
  value: FormValue;
  onChange: (value: FormValue) => void;
  onBlur: () => void;
  ref: React.Ref<TRef>;
  hasError: boolean;
  error?: FieldError;
  label?: string;
}

export interface CommonRadioGroupProps<TRef = unknown>
  extends Omit<FormControlProps, 'children'> {
  name: string;
  label?: string;
  maxWidth?: string;
  children: (props: RadioGroupRenderPropParams<TRef>) => ReactElement;
}

const helperTextSx = {
  minHeight: '20px',
  margin: 0,
};

function CommonRadioGroup<TRef = unknown>({
  name,
  label,
  maxWidth = '100%',
  variant = 'outlined',
  children,
  ...formControlProps
}: CommonRadioGroupProps<TRef>) {
  const { control, formState } = useFormContext();

  // ✅ Safe with lodash/get, still tree-shakable
  const error = get(formState.errors, name) as FieldError | undefined;
  const hasError = Boolean(error);

  return (
    <FormControl
      fullWidth
      error={hasError}
      sx={{ maxWidth }}
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
          ...helperTextSx,
          visibility: hasError ? 'visible' : 'hidden',
        }}
      >
        {hasError ? error?.message : ' '}
      </FormHelperText>
    </FormControl>
  );
}

export default CommonRadioGroup;
