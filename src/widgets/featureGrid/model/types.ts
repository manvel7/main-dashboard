import { ReactNode } from 'react';

export interface FeatureData {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  action: string;
}

export interface FeatureGridProps {
  features: FeatureData[];
  onFeatureClick?: (feature: FeatureData) => void;
  customContent?: (feature: FeatureData, index: number) => ReactNode;
  gap?: number;
}

export interface FeatureCardProps {
  feature: FeatureData;
  index: number;
  onClick?: (feature: FeatureData) => void;
  customContent?: (feature: FeatureData, index: number) => ReactNode;
}
