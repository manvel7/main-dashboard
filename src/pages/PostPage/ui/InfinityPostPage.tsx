import React from 'react';
import InfiniteScrollPosts from '@features/posts/ui/InfiniteScrollPosts';
import { HomeContainer } from '@/pages/HomePage/styles';
import { PageContainer } from '@/shared';

export const InfiniteScrollPage: React.FC = () => {
  return (
    <PageContainer>
      <HomeContainer disableGutters maxWidth="xl">
        <InfiniteScrollPosts />
      </HomeContainer>
    </PageContainer>
  );
};
