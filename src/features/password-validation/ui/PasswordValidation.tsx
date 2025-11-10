import React, { useMemo } from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { CustomTextField } from '@shared/common';
import { usePasswordValidation } from '../hooks';
import { ValidationRule } from './ValidationRule';
import { StyledPasswordValidationContainer, StyledRulesContainer } from '../styles';

export const PasswordValidation: React.FC = () => {
  const { passwordForm, validationRules, validationResult } = usePasswordValidation();

  const rulesList = useMemo(
    () =>
      validationRules.map(rule => (
        <ValidationRule
          key={rule.id}
          label={rule.label}
          isValid={validationResult.rules[rule.id] || false}
          isTouched={validationResult.isTouched}
        />
      )),
    [validationRules, validationResult.rules, validationResult.isTouched]
  );

  return (
    <FormProvider {...passwordForm}>
      <StyledPasswordValidationContainer>
        <Paper elevation={2} sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
            Password Validation
          </Typography>

          <Box sx={{ mb: 3 }}>
            <CustomTextField name="password" label="Password">
              {({ value, onChange, onBlur, hasError, label }) => (
                <TextField
                  fullWidth
                  label={label}
                  type="password"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  onBlur={onBlur}
                  error={hasError}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ autoComplete: 'new-password' }}
                  variant="outlined"
                />
              )}
            </CustomTextField>
          </Box>

          <StyledRulesContainer>{rulesList}</StyledRulesContainer>
        </Paper>
      </StyledPasswordValidationContainer>
    </FormProvider>
  );
};
