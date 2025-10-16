import { useEffect, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchPosts } from '@features/posts/model/postsSlice';
import {
  selectPostsItems,
  selectPostsPage,
  selectPostsLimit,
  selectPostsHasMore,
  selectPostsStatus,
  selectPostsError,
  selectMaxLimit,
} from '@features/posts/model/selectors';

export const usePostsInfiniteScroll = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectPostsItems);
  const page = useAppSelector(selectPostsPage);
  const limit = useAppSelector(selectPostsLimit);
  const hasMore = useAppSelector(selectPostsHasMore);
  const status = useAppSelector(selectPostsStatus);
  const error = useAppSelector(selectPostsError);
  const maxLimit = useAppSelector(selectMaxLimit);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      if (items.length === 0) {
        try {
          await dispatch(fetchPosts({ page: 1, limit }));
        } catch (err) {
          console.error('Error fetching initial posts:', err);
        }
      }
    };

    fetchInitialPosts();
  }, []);

  const fetchMoreData = useCallback(async () => {
    if (status !== 'loading' && items.length < maxLimit && !isLoading) {
      setIsLoading(true);
      try {
        const remaining = maxLimit - items.length;
        const fetchLimit = remaining < limit ? remaining : limit;

        await dispatch(fetchPosts({ page, limit: fetchLimit }));
      } catch (err) {
        console.error('Error fetching more posts:', err);
      } finally {
        console.log('Setting isLoading to false');
        setIsLoading(false);
      }
    }
  }, [status, items.length, maxLimit, isLoading, page, limit]);

  return {
    items,
    hasMore,
    error,
    isLoading,
    fetchMoreData,
    status,
  } as const;
};
