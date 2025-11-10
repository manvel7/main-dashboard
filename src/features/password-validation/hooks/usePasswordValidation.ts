import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { validationRules } from '../constants/passwordValidation';
import { yupResolver } from '@hookform/resolvers/yup';

export interface ValidationResult {
  isValid: boolean;
  rules: Record<string, boolean>;
  isTouched: boolean;
}

export interface PasswordFormData {
  password: string;
}

// Yup schema
export const passwordSchema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .test('password-validation', 'Password does not meet requirements', (value = '') => {
      return validationRules.every(rule => rule.validator(value));
    }),
});

export const usePasswordValidation = () => {
  const passwordForm = useForm<PasswordFormData>({
    defaultValues: { password: '' },
    resolver: yupResolver(passwordSchema),
    mode: 'all',
  });

  const password = passwordForm.watch('password');
  const isTouched = Boolean(passwordForm.formState.touchedFields.password);

  const validatePassword = useCallback((value: string) => {
    const rules: Record<string, boolean> = {};
    validationRules.forEach(rule => {
      rules[rule.id] = rule.validator(value);
    });
    const isValid = Object.values(rules).every(Boolean);
    return { isValid, rules };
  }, []);

  const validationResult: ValidationResult = useMemo(() => {
    const validation = validatePassword(password || '');
    return { ...validation, isTouched };
  }, [password, isTouched, validatePassword]);

  return {
    passwordForm,
    password: password || '',
    validationRules,
    validationResult,
  };
};
