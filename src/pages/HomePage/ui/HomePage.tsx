import React, { useState } from 'react';
import {
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  MenuItem,
  Select,
  InputLabel
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Subscriptions as SubscriptionsIcon,
} from '@mui/icons-material';
import { PageContainer } from '@shared/index';
import { FeatureGrid, FeatureData } from '@widgets/featureGrid';
import { CustomFeatureContent } from '@widgets/featureGrid/ui/CustomFeatureContent';
import {
  HomeContainer,
  WelcomeSection
} from '@pages/HomePage/styles';
import { FormProvider, useForm, UseFormGetValues } from 'react-hook-form';
import CustomSelect from '@shared/common/CommonSelect';

const features: FeatureData[] = [
  {
    id: 'dashboard',
    icon: <DashboardIcon fontSize="large" />,
    title: 'Dashboard Overview',
    description: 'Get a comprehensive view of your system metrics and performance indicators.',
    action: 'View Dashboard'
  },
  {
    id: 'users',
    icon: <PeopleIcon fontSize="large" />,
    title: 'User Management',
    description: 'Manage user accounts, permissions, and access control settings.',
    action: 'Manage Users'
  },
  {
    id: 'subscriptions',
    icon: <SubscriptionsIcon fontSize="large" />,
    title: 'Subscriptions',
    description: 'Monitor and manage subscription plans, billing, and payment processing.',
    action: 'View Subscriptions'
  },
  {
    id: 'settings',
    icon: <SettingsIcon fontSize="large" />,
    title: 'System Settings',
    description: 'Configure system preferences, integrations, and global settings.',
    action: 'Open Settings'
  }
];


export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const methods = useForm<UseFormGetValues<any>>({
    defaultValues: {
      role: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };


  return (
    <PageContainer>
      <HomeContainer disableGutters maxWidth="xl">
        {/* Welcome Section */}
        <WelcomeSection elevation={0}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Welcome to Your Dashboard
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ mb: 3, opacity: 0.9 }}
          >
            Your central hub for managing and monitoring all aspects of your system.
            Get insights, manage users, and control your platform efficiently.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              }
            }}
          >
            Get Started
          </Button>
        </WelcomeSection>

        {/* Feature Cards */}
        <FeatureGrid
          features={features}
          onFeatureClick={(feature: FeatureData) => console.log('Navigate to:', feature.id)}
          customContent={(feature: FeatureData, index: number) => (
            <CustomFeatureContent feature={feature} index={index} />
          )}
        />


        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <CustomSelect name="role" label="Select Role">
              {({ value, onChange, onBlur, ref, hasError, label }) => (
                <>
                  <InputLabel id="role-label">{label}</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    value={value ?? ''}
                    onChange={(event) => onChange(event.target.value)}
                    onBlur={onBlur}
                    inputRef={ref}
                    fullWidth
                    error={hasError}
                    label={label}
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="guest">Guest</MenuItem>
                  </Select>
                </>
              )}
            </CustomSelect>
          </form>
        </FormProvider>
      </HomeContainer>
    </PageContainer >
  );
};
