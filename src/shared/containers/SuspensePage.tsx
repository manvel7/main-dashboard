import React, { Suspense } from 'react';
import { LoadingSpinner } from '@shared/containers/LoadingSpinner';

interface SuspensePageProps {
  children: React.ReactNode;
  hasLoading?: boolean;
}

export const SuspensePage: React.FC<SuspensePageProps> = ({
  children,
  hasLoading = true,
}) => (
  <Suspense fallback={hasLoading ? <LoadingSpinner /> : null}>
    {children}
  </Suspense>
);
