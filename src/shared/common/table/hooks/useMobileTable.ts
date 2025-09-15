import { useState, useRef, useEffect, useCallback } from 'react';

interface UseMobileTableProps<T> {
  data: T[];
  getRowId?: (row: T, index: number) => string | number;
  batchSize?: number;
  hasMore?: boolean;
  loading?: boolean;
  loadMore?: () => void;
}

export function useMobileTable<T>({
  data,
  getRowId,
  batchSize = 20,
  hasMore = false,
  loading,
  loadMore,
}: UseMobileTableProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [expandedMap, setExpandedMap] = useState<
    Record<string | number, boolean>
  >(() =>
    data.reduce(
      (acc, row, index) => {
        const key = getRowId ? getRowId(row, index) : index;
        acc[key] = true; // expanded by default
        return acc;
      },
      {} as Record<string | number, boolean>
    )
  );

  const [renderedCount, setRenderedCount] = useState(
    Math.min(batchSize, data.length)
  );

  const toggleExpanded = useCallback((key: string | number) => {
    setExpandedMap((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || !hasMore || loading) return;

    if (
      container.scrollHeight - container.scrollTop - container.clientHeight <
      100
    ) {
      const nextCount = Math.min(renderedCount + batchSize, data.length);
      setRenderedCount(nextCount);

      if (loadMore && nextCount >= data.length) {
        loadMore();
      }
    }
  }, [batchSize, data.length, hasMore, loadMore, loading, renderedCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return {
    containerRef,
    expandedMap,
    toggleExpanded,
    renderedCount,
  };
}
