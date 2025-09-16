import React from "react";
import Arrows from "@shared/common/carousel/Arrows";
import Dots from "@shared/common/carousel/Dots";
import { CarouselRoot, Slide, Track } from "@shared/common/carousel/styles";
import { useCarousel, BreakpointSettings } from "@shared/common/carousel/useCarousel";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoplay?: boolean;
  autoplaySpeed?: number;
  infinite?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  slidesToShow?: number;
  responsive?: BreakpointSettings[];
  height?: number | string;
  onSlideChange?: (index: number) => void;
}

function Carousel<T>({
  items,
  renderItem,
  autoplay = true,
  autoplaySpeed = 3000,
  infinite = true,
  showDots = true,
  showArrows = true,
  slidesToShow = 1,
  responsive = [],
  height = 300,
  onSlideChange,
}: CarouselProps<T>) {
  const { currentIndex, visibleSlides, maxIndex, next, prev, onTouchStart, onTouchEnd } = useCarousel({
    itemCount: items.length,
    autoplay,
    autoplaySpeed,
    infinite,
    slidesToShow,
    responsive,
    onSlideChange,
  });

  const widthPercent = (items.length * 100) / visibleSlides;
  const translatePercent = (currentIndex * 100) / items.length;
  const basisPercent = 100 / items.length;

  return (
    <CarouselRoot $height={height}>
      <Track
        $widthPercent={widthPercent}
        $translatePercent={translatePercent}
        onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      >
        {items.map((item, idx) => (
          <Slide key={idx} $basisPercent={basisPercent}>
            {renderItem(item, idx)}
          </Slide>
        ))}
      </Track>

      <Arrows onPrev={prev} onNext={next} show={showArrows} />
      <Dots steps={maxIndex + 1} activeStep={currentIndex} show={showDots} />
    </CarouselRoot>
  );
}

export default Carousel;


