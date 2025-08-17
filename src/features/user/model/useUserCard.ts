import { useCallback } from 'react';

export const useUserCard = () => {
  // Memoized utility functions
  const formatNumber = useCallback((num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'k';
    }
    return num.toString();
  }, []);

  const getInitials = useCallback((name: string): string => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }, []);

  const getGradientIndex = useCallback((id: string): number => {
    return parseInt(id) || 0;
  }, []);

  return {
    // Utility functions
    formatNumber,
    getInitials,
    getGradientIndex,
  };
};
