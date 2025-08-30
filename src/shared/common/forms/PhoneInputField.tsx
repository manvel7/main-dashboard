import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@shared/common/forms/PhoneInputField.css';
import { Theme, useTheme } from '@mui/material/styles';

interface PhoneInputFieldProps {
  value: string | undefined;
  onChange: (value: string) => void;
  onBlur: () => void;
  hasError: boolean;
  country?: string;
  placeholder?: string;
}

const getPhoneInputStyles = (theme: Theme, hasError: boolean) => ({
  inputStyle: {
    width: '100%',
    height: '56px',
    border: hasError
      ? '1px solid #d32f2f'
      : theme.palette.mode === 'dark'
        ? '1px solid rgba(255, 255, 255, 0.12)'
        : '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '8px',
    fontSize: '16px',
    paddingLeft: '48px',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : '#f5f5f5',
    color: theme.palette.text.primary,
    transition: 'border-color 0.2s ease-in-out',
  },
  buttonStyle: {
    border: hasError
      ? '1px solid #d32f2f'
      : theme.palette.mode === 'dark'
        ? '1px solid rgba(255, 255, 255, 0.12)'
        : '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '8px 0 0 8px',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : '#f5f5f5',
  },
  dropdownStyle: {
    maxHeight: '170px',
    overflowY: 'auto' as const,
  },
});

export const PhoneInputField = React.forwardRef<
  HTMLInputElement,
  PhoneInputFieldProps
>(
  (
    {
      value,
      onChange,
      onBlur,
      hasError,
      country = 'us',
      placeholder = 'Enter phone number',
    },
    ref
  ) => {
    const theme = useTheme();

    const styles = getPhoneInputStyles(theme, hasError);

    return (
      <PhoneInput
        country={country}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{
          ref: ref,
        }}
        inputStyle={styles.inputStyle}
        buttonStyle={styles.buttonStyle}
        containerStyle={{
          width: '100%',
        }}
        dropdownStyle={styles.dropdownStyle}
        placeholder={placeholder}
        enableSearch={false}
        disableSearchIcon={true}
      />
    );
  }
);

PhoneInputField.displayName = 'PhoneInputField';

export default PhoneInputField;
