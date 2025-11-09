import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { validationRules } from '../constants/passwordValidation';



export interface ValidationResult {
  isValid: boolean;
  rules: Record<string, boolean>;
  isTouched: boolean;
}

export interface PasswordFormData {
  password: string;
}



export const usePasswordValidation = () => {
  const passwordForm = useForm<PasswordFormData>({
    defaultValues: {
      password: '',
    },
    mode: 'all',
  });

  const password = passwordForm.watch('password');
  const isTouched = Boolean(passwordForm.formState.touchedFields.password && passwordForm.formState.isDirty);

  const validatePassword = useCallback((value: string) => {
    const rules: Record<string, boolean> = {};

    validationRules.forEach((rule) => {
      rules[rule.id] = rule.validator(value);
    });

    const isValid = Object.values(rules).every((ruleValid) => ruleValid);

    return {
      isValid,
      rules,
    };
  }, []);

  const validationResult: ValidationResult = useMemo(() => {
    const validation = validatePassword(password || '');
    return {
      ...validation,
      isTouched: Boolean(isTouched),
    };
  }, [password, isTouched, validatePassword]);

  return {
    passwordForm,
    password: password || '',
    validationRules,
    validationResult,
  };
};

