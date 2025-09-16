import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface BreakpointSettings {
  breakpoint: number;
  slidesToShow: number;
}

export interface UseCarouselParams {
  itemCount: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  infinite?: boolean;
  slidesToShow?: number;
  responsive?: BreakpointSettings[];
  onSlideChange?: (index: number) => void;
}

export const useCarousel = ({
  itemCount,
  autoplay = true,
  autoplaySpeed = 3000,
  infinite = true,
  slidesToShow = 1,
  responsive = [],
  onSlideChange,
}: UseCarouselParams) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleSlides, setVisibleSlides] = useState<number>(slidesToShow);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number>(0);

  const maxIndex = useMemo(() => Math.max(itemCount - visibleSlides, 0), [itemCount, visibleSlides]);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      let matchedSlides = slidesToShow;
      responsive.forEach(({ breakpoint, slidesToShow: bpSlides }) => {
        if (window.innerWidth <= breakpoint) {
          matchedSlides = bpSlides;
        }
      });
      setVisibleSlides(matchedSlides);
      setCurrentIndex((prev) => Math.min(prev, Math.max(itemCount - matchedSlides, 0)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [responsive, slidesToShow, itemCount]);

  const goTo = useCallback(
    (newIndex: number) => {
      const bounded = Math.min(Math.max(newIndex, 0), maxIndex);
      setCurrentIndex(bounded);
      onSlideChange?.(bounded);
    },
    [maxIndex, onSlideChange]
  );

  const next = useCallback(() => {
    let newIndex = currentIndex + visibleSlides;
    if (newIndex > maxIndex) {
      newIndex = infinite ? 0 : maxIndex;
    }
    goTo(newIndex);
  }, [currentIndex, visibleSlides, maxIndex, infinite, goTo]);

  const prev = useCallback(() => {
    let newIndex = currentIndex - visibleSlides;
    if (newIndex < 0) {
      newIndex = infinite ? maxIndex : 0;
    }
    goTo(newIndex);
  }, [currentIndex, visibleSlides, maxIndex, infinite, goTo]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      next();
    }, autoplaySpeed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplaySpeed, next]);

  // Swipe handling
  const onTouchStart = useCallback((clientX: number) => {
    startX.current = clientX;
  }, []);

  const onTouchEnd = useCallback(
    (clientX: number) => {
      if (startX.current - clientX > 50) {
        next();
      } else if (clientX - startX.current > 50) {
        prev();
      }
    },
    [next, prev]
  );

  const api = useMemo(
    () => ({
      currentIndex,
      visibleSlides,
      maxIndex,
      next,
      prev,
      goTo,
      onTouchStart,
      onTouchEnd,
    }),
    [currentIndex, visibleSlides, maxIndex, next, prev, goTo, onTouchStart, onTouchEnd]
  );

  return api;
};

export type UseCarouselApi = ReturnType<typeof useCarousel>;


