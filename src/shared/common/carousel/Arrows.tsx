import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { ArrowLeft, ArrowRight } from './styles';

interface ArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  show?: boolean;
}

export const Arrows: React.FC<ArrowsProps> = ({
  onPrev,
  onNext,
  show = true,
}) => {
  if (!show) return null;
  return (
    <>
      <ArrowLeft onClick={onPrev}>
        <KeyboardArrowLeft />
      </ArrowLeft>
      <ArrowRight onClick={onNext}>
        <KeyboardArrowRight />
      </ArrowRight>
    </>
  );
};

export default Arrows;
