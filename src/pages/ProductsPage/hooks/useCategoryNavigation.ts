import { useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CATEGORY_NAME_MARGIN } from '@pages/ProductsPage/constants/category';

export function useCategoryNavigation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const scrollToCategory = useCallback(
    (el: HTMLElement | null, catId: string) => {
      if (!el) return;
      el.style.scrollMarginTop = CATEGORY_NAME_MARGIN;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const params = new URLSearchParams(window.location.search);
      params.set('catId', catId);
      navigate(
        { pathname: window.location.pathname, search: params.toString() },
        { replace: true }
      );
    },
    [navigate]
  );

  const getCatIdFromUrl = useCallback(() => {
    return searchParams.get('catId');
  }, [searchParams]);

  return { scrollToCategory, getCatIdFromUrl } as const;
}
