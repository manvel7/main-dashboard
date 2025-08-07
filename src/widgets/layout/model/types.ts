import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  sidebarOpen?: boolean;
  onSidebarToggle?: () => void;
}
