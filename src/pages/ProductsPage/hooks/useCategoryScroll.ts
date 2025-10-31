import { useState, useRef, useEffect, useCallback } from 'react';
import { ROOT_MARGIN } from '@pages/ProductsPage/constants/category';

export function useCategoryScroll(categoryIds: string[]) {
  const [activeCatId, setActiveCatId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!categoryIds.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const el = visible[0].target as HTMLElement;
          const id = el.dataset.categoryId;
          if (id && id !== activeCatId) setActiveCatId(id);
        }
      },
      {
        rootMargin: ROOT_MARGIN,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    return () => observer.current?.disconnect();
  }, [categoryIds]);

  const observe = useCallback((el: Element | null) => {
    if (el) observer.current?.observe(el);
  }, []);

  return { activeCatId, observe, setActiveCatId } as const;
}
