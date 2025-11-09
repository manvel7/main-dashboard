import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export interface ValidationRule {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  rules: Record<string, boolean>;
  isTouched: boolean;
}

export interface PasswordFormData {
  password: string;
}

const validationRules: ValidationRule[] = [
  {
    id: 'minLength',
    label: 'At least 8 characters long',
    validator: (password: string) => password.length >= 8,
  },
  {
    id: 'lowercase',
    label: 'Include at least one lowercase letter (a-z)',
    validator: (password: string) => /[a-z]/.test(password),
  },
  {
    id: 'uppercase',
    label: 'Include at least one uppercase letter (A-Z)',
    validator: (password: string) => /[A-Z]/.test(password),
  },
  {
    id: 'symbol',
    label: 'Include at least one symbol (!, @, #, etc.)',
    validator: (password: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  },
  {
    id: 'numberAndSpecial',
    label: 'Includes number and special character (+,3)',
    validator: (password: string) => /[0-9]/.test(password) && /[+!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  },
];

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

