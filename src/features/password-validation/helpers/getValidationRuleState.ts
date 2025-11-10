import { CheckCircle, Cancel } from '@mui/icons-material';
import { Theme } from '@mui/material';

/** ---------------- TypeScript "Enums" Pattern ----------------
    * Advantages:
    * - Type-safe: prevents accidental invalid values.
    * - Performance-friendly: no runtime enum object, just literal values.
    * - Extensible: add new states easily without changing type definitions.
    * - Readable: clearly shows all allowed states and their purpose.
 *  ---------------- */
export const RuleStates = {
  Untouched: 'UNTOUCHED',
  Valid: 'VALID',
  Invalid: 'INVALID',
} as const;

export type RuleState = typeof RuleStates[keyof typeof RuleStates];

/** ---------------- ValidationRuleState ---------------- */
export interface ValidationRuleState {
  color: string;
  Icon: typeof CheckCircle | typeof Cancel;
}

/** ---------------- State map ---------------- */
export const getStateMap = (theme: Theme): Record<RuleState, ValidationRuleState> => ({
  [RuleStates.Untouched]: { color: theme.palette.text.secondary, Icon: CheckCircle },
  [RuleStates.Valid]: { color: theme.palette.success.main, Icon: CheckCircle },
  [RuleStates.Invalid]: { color: theme.palette.error.main, Icon: Cancel },
});

/** ---------------- Compute current state ---------------- */
export const computeRuleState = (isTouched: boolean, isValid: boolean): RuleState => {
   if (!isTouched) return RuleStates.Untouched;
   if (isValid) return RuleStates.Valid;
   return RuleStates.Invalid;
}

/** ---------------- Main helper ---------------- */
export const getValidationRuleState = (
  isTouched: boolean,
  isValid: boolean,
  theme: Theme
): ValidationRuleState => {
  const currentState = computeRuleState(isTouched, isValid);
  return getStateMap(theme)[currentState];
};
