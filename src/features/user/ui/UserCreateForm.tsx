import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { FormProvider } from 'react-hook-form';
import { UserCreateFormContainer } from '@features/user/styles';
import useCreateUser from '@features/user/model/useCreateUser';
import { Grid, TextField, Select, MenuItem } from '@mui/material';
import {
  CustomTextField,
  CustomSelect,
  CustomPhoneInput,
  PhoneInputField,
} from '@/shared/common';

export const UserCreateForm = () => {
  const { t } = useTranslation();
  const { createUser, handleCreateUser, countryOptions, loading } =
    useCreateUser();

  return (
    <UserCreateFormContainer>
      <FormProvider {...createUser}>
        <form onSubmit={createUser.handleSubmit(handleCreateUser)}>
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="fullName" label="Full name">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your full name"
                    fullWidth
                    label="Full name"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="email" label="Email">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your email"
                    fullWidth
                    label="Email"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="stateRegion" label="State/Region">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your state/region"
                    fullWidth
                    label="State/Region"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="city" label="City">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your city"
                    fullWidth
                    label="City"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="address" label="Address">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your address"
                    fullWidth
                    label="Address"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="zipCode" label="Zip/Code">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your zip/code"
                    fullWidth
                    label="Zip/Code"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="company" label="Company">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your company"
                    fullWidth
                    label="Company"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomTextField name="role" label="Role">
                {({ value, onChange, onBlur, ref, hasError, error }) => (
                  <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    placeholder="Enter your role"
                    fullWidth
                    label="Role"
                  />
                )}
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomSelect name="country" label="Country">
                {({ value, onChange, onBlur, ref, hasError }) => (
                  <Select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    error={hasError}
                    displayEmpty
                    fullWidth
                  >
                    {countryOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </CustomSelect>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <CustomPhoneInput
                name="phoneNumber"
                label="Phone Number"
                country="us"
              >
                {({ value, onChange, onBlur, ref, hasError }) => (
                  <PhoneInputField
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    hasError={hasError}
                    country="us"
                    placeholder="Enter your phone number"
                    ref={ref as React.RefObject<HTMLInputElement>}
                  />
                )}
              </CustomPhoneInput>
            </Grid>
            <Grid size={12}>
              <LoadingButton
                loading={loading}
                disabled={loading || !createUser.formState.isValid}
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  width: 'auto',
                  marginLeft: 'auto',
                  marginRight: 0,
                }}
              >
                {t('Create User')}
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </UserCreateFormContainer>
  );
};
