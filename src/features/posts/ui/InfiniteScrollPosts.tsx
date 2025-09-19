import { useCallback } from 'react';
import { Box, Typography, styled } from '@mui/material';
import PostCard from '@features/posts/ui/PostCard';
import type { Post } from '@features/posts/model/postsSlice';
import { LoadingSpinner } from '@/shared/containers/LoadingSpinner';
import { CommonInfiniteScroll } from '@/shared/common';
import { usePostsInfiniteScroll } from '@features/posts/hooks/usePostsInfiniteScroll';

const PostsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  overflowX: 'hidden',
  width: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const InfiniteScrollPosts = () => {
  const { items, hasMore, error, isLoading, fetchMoreData } =
    usePostsInfiniteScroll();

  const renderItem = useCallback((post: Post) => <PostCard post={post} />, []);
  const extractKey = useCallback((post: Post) => post.id, []);

  return (
    <>
      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
      <CommonInfiniteScroll
        items={items}
        hasMore={hasMore}
        isLoading={isLoading}
        loadMore={fetchMoreData}
        loader={
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <LoadingSpinner size={30} minHeight="300px" />
          </Box>
        }
        scrollThreshold={0.98}
        renderItem={renderItem}
        keyExtractor={extractKey}
        listWrapper={PostsGrid}
      />
    </>
  );
};

export default InfiniteScrollPosts;
