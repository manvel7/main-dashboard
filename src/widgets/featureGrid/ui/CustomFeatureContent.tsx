import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FeatureData } from '@widgets/featureGrid';

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: '16px',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    borderColor: theme.palette.primary.light,
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  width: 64,
  height: 64,
  margin: '0 auto 16px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  color: theme.palette.primary.contrastText,
}));

interface CustomFeatureContentProps {
  feature: FeatureData;
  index: number;
}

export const CustomFeatureContent: React.FC<CustomFeatureContentProps> = ({ feature, index }) => {
  return (
    <FeatureCard elevation={1}>
      <IconWrapper>
        {feature.icon}
      </IconWrapper>
      <Typography variant="h6" component="h3" gutterBottom fontWeight="600">
        {feature.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {feature.description}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2 }}
      >
        {feature.action}
      </Button>
    </FeatureCard>
  );
};
