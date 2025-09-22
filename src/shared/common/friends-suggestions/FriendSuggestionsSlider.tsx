import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FriendRequestCard from './FriendRequestCard';
import { FriendSuggestionsSliderProps } from './types';

const SliderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0),
  overflow: 'hidden', // Prevent horizontal scroll
  '& .slick-slider': {
    position: 'relative',
  },
  '& .slick-list': {
    margin: theme.spacing(0, -1),
    overflow: 'hidden', // Ensure slick-list doesn't overflow
  },
  '& .slick-slide > div': {
    padding: theme.spacing(0, 1),
  },
  // Mobile-specific styles
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
    '& .slick-list': {
      margin: 0, // Remove negative margins on mobile
    },
    '& .slick-slide > div': {
      padding: theme.spacing(0, 0.5), // Reduce padding on mobile
    },
  },
  '& .slick-dots': {
    bottom: theme.spacing(-3),
    '& li': {
      margin: theme.spacing(0, 0.5),
      '& button:before': {
        fontSize: '12px',
        color: theme.palette.grey[400],
      },
      '&.slick-active button:before': {
        color: theme.palette.primary.main,
      },
    },
  },
  '& .slick-arrow': {
    zIndex: 1,
    '&:before': {
      fontSize: '24px',
      color: theme.palette.primary.main,
    },
    '&.slick-prev': {
      left: theme.spacing(1),
    },
    '&.slick-next': {
      right: theme.spacing(1),
    },
    '&.slick-disabled': {
      opacity: 0.3,
    },
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const EmptyState = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FriendSuggestionsSlider: React.FC<FriendSuggestionsSliderProps> = ({
  friends,
  slidesToShow = 4,
  slidesToScroll = 1,
  infinite = true,
  autoplay = false,
  autoplaySpeed = 3000,
  showDots = true,
  showArrows = true,
  onAddFriend,
  onRemoveSuggestion,
  onViewProfile,
  className,
}) => {
  const settings = {
    dots: showDots,
    infinite: infinite && friends.length > slidesToShow,
    speed: 500,
    slidesToShow: Math.min(slidesToShow, friends.length),
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    arrows: showArrows,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, friends.length),
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(2, friends.length),
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ],
  };

  if (friends.length === 0) {
    return (
      <SliderContainer className={className}>
        <SectionTitle variant="h5">Friend Suggestions</SectionTitle>
        <EmptyState>
          <Typography variant="body1" color="text.secondary">
            No friend suggestions available at the moment.
          </Typography>
        </EmptyState>
      </SliderContainer>
    );
  }

  return (
    <SliderContainer className={className}>
      <SectionTitle variant="h5">Friend Suggestions</SectionTitle>
      <Slider {...settings}>
        {friends.map((friend) => (
          <div key={friend.id}>
            <FriendRequestCard
              friend={friend}
              onAddFriend={onAddFriend}
              onRemoveSuggestion={onRemoveSuggestion}
              onViewProfile={onViewProfile}
            />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default FriendSuggestionsSlider;
