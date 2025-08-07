import React from 'react';
import { Typography, Button } from '@mui/material';
import { FeatureCardProps } from '../model/types';
import { FeatureCardWrapper, IconWrapper } from './styles';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  onClick,
  customContent
}) => {
  const handleClick = () => {
    onClick?.(feature);
  };

  if (customContent) {
    return (
      <div onClick={handleClick}>
        {customContent(feature, index)}
      </div>
    );
  }

  return (
    <FeatureCardWrapper elevation={1} onClick={handleClick}>
      <IconWrapper>
        {feature.icon}
      </IconWrapper>

      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        fontWeight="600"
        sx={{ mb: 2 }}
      >
        {feature.title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        paragraph
        sx={{ flexGrow: 1, mb: 3 }}
      >
        {feature.description}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        size="medium"
        sx={{
          mt: 'auto',
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 500
        }}
      >
        {feature.action}
      </Button>
    </FeatureCardWrapper>
  );
};
