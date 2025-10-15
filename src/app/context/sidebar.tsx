import React from 'react';
import { useSidebar } from '@widgets/sidebar/model/useSidebar';

interface SidebarControllerContextValue {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  isMobile: boolean;
}

const SidebarControllerContext = React.createContext<SidebarControllerContextValue | null>(null);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, onSidebarToggle, isMobile } = useSidebar();

  const value = React.useMemo(() => ({ sidebarOpen: isOpen, onSidebarToggle, isMobile }), [isOpen, onSidebarToggle, isMobile]);

  return (
    <SidebarControllerContext.Provider value={value}>
      {children}
    </SidebarControllerContext.Provider>
  );
};

export const useSidebarController = (): SidebarControllerContextValue => {
  const ctx = React.useContext(SidebarControllerContext);
  if (!ctx) {
    throw new Error('useSidebarController must be used within SidebarProvider');
  }
  return ctx;
};


