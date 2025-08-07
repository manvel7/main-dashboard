import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface SuspensePageProps {
  children: React.ReactNode;
  message?: string;
}

export const SuspensePage: React.FC<SuspensePageProps> = ({
  children,
  message = ""
}) => (
  <Suspense fallback={<LoadingSpinner message={message} />}>
    {children}
  </Suspense>
);
