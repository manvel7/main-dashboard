import { ReactNode } from 'react';

export interface SidebarRenderProps {
  header?: () => ReactNode;
  content?: () => ReactNode;
  footer?: () => ReactNode;
}

export interface SidebarProps {
  children: (props: SidebarRenderProps) => ReactNode;
  open?: boolean;
  onToggle?: () => void;
}
