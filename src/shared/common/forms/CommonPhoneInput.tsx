import React, { ReactElement } from 'react';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import get from 'lodash/get';
import { FormControl, FormControlProps, FormHelperText } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type FormValue = string | undefined;

interface PhoneInputRenderPropParams<TRef = HTMLInputElement> {
  value: FormValue;
  onChange: (value: FormValue) => void;
  onBlur: () => void;
  ref: React.Ref<TRef>;
  hasError: boolean;
  error?: FieldError;
  label?: string;
}

export interface CustomPhoneInputProps<TRef = HTMLInputElement>
  extends Omit<FormControlProps, 'children'> {
  name: string;
  label?: string;
  maxWidth?: string;
  country?: string;
  children: (props: PhoneInputRenderPropParams<TRef>) => ReactElement;
}

function CustomPhoneInput<TRef = HTMLInputElement>({
  name,
  label,
  maxWidth = '100%',
  variant = 'outlined',
  country = 'us',
  children,
  ...formControlProps
}: CustomPhoneInputProps<TRef>) {
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

export default CustomPhoneInput;
