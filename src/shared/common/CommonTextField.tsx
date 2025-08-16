import React, { ReactElement } from 'react';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import get from 'lodash/get';
import { FormControl, FormControlProps, FormHelperText } from '@mui/material';

type FormValue = string | number | undefined;

interface TextFieldRenderPropParams<TRef = unknown> {
  value: FormValue;
  onChange: (value: FormValue) => void;
  onBlur: () => void;
  ref: React.Ref<TRef>;
  hasError: boolean;
  error?: FieldError;
  label?: string;
  InputLabelProps?: {
    shrink: boolean;
  };
  inputProps?: {
    autoComplete: string;
  };
}

export interface CustomTextFieldProps<TRef = unknown>
  extends Omit<FormControlProps, 'children'> {
  name: string;
  label?: string;
  maxWidth?: string;
  InputLabelProps?: {
    shrink: boolean;
  };
  inputProps?: {
    autoComplete: string;
  };
  children: (props: TextFieldRenderPropParams<TRef>) => ReactElement;
}

function CustomTextField<TRef = unknown>({
  name,
  label,
  maxWidth = '100%',
  variant = 'outlined',
  children,
  InputLabelProps = {
    shrink: true,
  },
  inputProps = {
    autoComplete: 'off',
  },
  ...formControlProps
}: CustomTextFieldProps<TRef>) {
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
            InputLabelProps,
            inputProps,
          })
        }
      />
    </FormControl>
  );
}

export default CustomTextField;
