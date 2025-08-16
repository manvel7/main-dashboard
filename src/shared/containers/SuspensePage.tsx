import React, { Suspense } from 'react';
import { LoadingSpinner } from '@shared/containers/LoadingSpinner';

interface SuspensePageProps {
  children: React.ReactNode;
}

export const SuspensePage: React.FC<SuspensePageProps> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);
