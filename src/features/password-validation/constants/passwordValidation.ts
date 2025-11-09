export interface ValidationRule {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

// Unique IDs for each validation rule
export const ValidationIds = {
  MIN_LENGTH: 'minLength',
  LOWERCASE: 'lowercase',
  UPPERCASE: 'uppercase',
  SYMBOL: 'symbol',
  NUMBER_AND_SPECIAL: 'numberAndSpecial',
} as const;

// User-friendly labels for each rule (can later support i18n)
export const ValidationLabels = {
  [ValidationIds.MIN_LENGTH]: 'At least 8 characters long',
  [ValidationIds.LOWERCASE]: 'Include at least one lowercase letter (a-z)',
  [ValidationIds.UPPERCASE]: 'Include at least one uppercase letter (A-Z)',
  [ValidationIds.SYMBOL]: 'Include at least one symbol (!, @, #, etc.)',
  [ValidationIds.NUMBER_AND_SPECIAL]: 'Include at least one number and one special character',
} as const;

// Reusable validator functions
export const hasMinLength = (min: number) => (password: string) => password.length >= min;
export const hasLowercase = (password: string) => /[a-z]/.test(password);
export const hasUppercase = (password: string) => /[A-Z]/.test(password);
export const hasNumber = (password: string) => /\d/.test(password);
export const hasSymbol = (password: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
export const hasNumberAndSymbol = (password: string) => hasNumber(password) && hasSymbol(password);

export const validationRules: ValidationRule[] = [
  {
    id: ValidationIds.MIN_LENGTH,
    label: ValidationLabels[ValidationIds.MIN_LENGTH],
    validator: hasMinLength(8),
  },
  {
    id: ValidationIds.LOWERCASE,
    label: ValidationLabels[ValidationIds.LOWERCASE],
    validator: hasLowercase,
  },
  {
    id: ValidationIds.UPPERCASE,
    label: ValidationLabels[ValidationIds.UPPERCASE],
    validator: hasUppercase,
  },
  {
    id: ValidationIds.SYMBOL,
    label: ValidationLabels[ValidationIds.SYMBOL],
    validator: hasSymbol,
  },
  {
    id: ValidationIds.NUMBER_AND_SPECIAL,
    label: ValidationLabels[ValidationIds.NUMBER_AND_SPECIAL],
    validator: hasNumberAndSymbol,
  },
];
