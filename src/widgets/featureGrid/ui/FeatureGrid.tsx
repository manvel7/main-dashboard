import React from 'react';
import { FeatureGridProps } from '../model/types';
import { FeatureCard } from './FeatureCard';
import { FeatureGridContainer } from './styles';

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  onFeatureClick,
  customContent,
  gap = 16
}) => {
  return (
    <FeatureGridContainer sx={{ gap: `${gap}px` }}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          index={index}
          onClick={onFeatureClick}
          customContent={customContent}
        />
      ))}
    </FeatureGridContainer>
  );
};
