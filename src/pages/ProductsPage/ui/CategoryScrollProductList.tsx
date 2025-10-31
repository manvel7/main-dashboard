import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Chip,
  Box,
  Container,
  Divider,
  Typography,
} from '@mui/material';

import { ProductItem } from '@pages/ProductsPage/ui/ProductItem';
import { makeDemoData } from '@pages/ProductsPage/helpers/makeDemoData';

import { useCategoryScroll } from '@pages/ProductsPage/hooks/useCategoryScroll';
import { useCategoryNavigation } from '@pages/ProductsPage/hooks/useCategoryNavigation';

/**
 * CategoryScrollProductList.tsx
 * Fully Material UI design
 * - Sticky AppBar for categories
 * - Category chips with highlighting
 * - Smooth scrolling and IntersectionObserver for active section
 * - Category state persisted in URL (/products?catId=3)
 */

export default function CategoryScrollProductList() {
  const categories = useMemo(() => makeDemoData(), []);
  const categoryIds = useMemo(() => categories.map((c) => c.id), [categories]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const { activeCatId, observe, setActiveCatId } =
    useCategoryScroll(categoryIds);
  const { scrollToCategory, getCatIdFromUrl } = useCategoryNavigation();

  useEffect(() => {
    const urlCat = getCatIdFromUrl();
    if (urlCat && sectionRefs.current[urlCat]) {
      setTimeout(
        () => scrollToCategory(sectionRefs.current[urlCat], urlCat),
        80
      );
      setActiveCatId(urlCat);
    }
  }, []);

  useEffect(() => {
    for (const id of categoryIds) {
      const el = sectionRefs.current[id];
      if (el) observe(el);
    }
  }, [categoryIds]);

  const handleCategoryClick = useCallback(
    (catId: string) => {
      const el = sectionRefs.current[catId];
      scrollToCategory(el, catId);
      setActiveCatId(catId);
    },
    [scrollToCategory, setActiveCatId]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar variant="dense" sx={{ overflowX: 'auto' }}>
          {categories.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.name}
              color={activeCatId === cat.id ? 'primary' : 'default'}
              onClick={() => handleCategoryClick(cat.id)}
              sx={{ mr: 1, flexShrink: 0 }}
            />
          ))}
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        {categories.map((cat) => (
          <Box
            key={cat.id}
            ref={(el: any) => (sectionRefs.current[cat.id] = el)}
            data-category-id={cat.id}
            sx={{ mb: 6 }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              {cat.name}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {cat.products.map((p) => (
              <ProductItem key={p.id} product={p} />
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
