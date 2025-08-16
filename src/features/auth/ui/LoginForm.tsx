import { LoadingButton } from '@mui/lab';
import { FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLogin } from '@features/auth/model/useLogin';
import { CustomTextField, CustomCheckbox } from '@shared/common';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Checkbox,
  TextField,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 14, // Consistent gap
});

const FormWrapper = styled(Box)({
  minHeight: '300px', // Ensure consistent form height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const LoginForm = () => {
  const { t } = useTranslation();

  const { loginForm, handleSubmit, showPassword, setShowPassword, isLoading } =
    useLogin();

  return (
    <FormProvider {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(handleSubmit)} autoComplete="off">
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 600 }}
        >
          {t('Login')}
        </Typography>
        <FormWrapper>
          <FormContainer>
            <CustomTextField name="email" label={t('Email')}>
              {({ value, onChange, hasError, error, label }) => (
                <TextField
                  sx={{ minHeight: '78px' }}
                  label={label}
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.value)
                  }
                  error={hasError}
                  helperText={error?.message}
                  InputLabelProps={{
                    shrink: true, // Always show label
                  }}
                  inputProps={{
                    autoComplete: 'off',
                  }}
                />
              )}
            </CustomTextField>
            <CustomTextField name="password" label={t('Password')}>
              {({ value, onChange, hasError, error, label }) => (
                <TextField
                  sx={{ minHeight: '78px' }}
                  label={label}
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.value)
                  }
                  error={hasError}
                  helperText={error?.message}
                  type={showPassword ? 'text' : 'password'}
                  InputLabelProps={{
                    shrink: true, // Always show label
                  }}
                  inputProps={{
                    autoComplete: 'new-password',
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </CustomTextField>
            <CustomCheckbox
              sx={{ mt: '-12px' }}
              name="rememberMe"
              label={t('Remember me')}
            >
              {({ value, onChange, onBlur, hasError }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                      onBlur={onBlur}
                      color={hasError ? 'error' : 'primary'}
                    />
                  }
                  label={t('Remember me')}
                />
              )}
            </CustomCheckbox>
          </FormContainer>

          <LoadingButton
            sx={{ mt: 2 }}
            loading={isLoading}
            fullWidth
            disabled={isLoading || !loginForm.formState.isValid}
            type="submit"
            variant="contained"
            color="primary"
          >
            {t('Login')}
          </LoadingButton>
        </FormWrapper>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
