import type { RootState } from '@app/store';
import { Post } from '@/features/posts/model/postsSlice';

export const selectPostsItems = (state: RootState): Post[] => state.posts.items;
export const selectPostsPage = (state: RootState): number => state.posts.page;
export const selectPostsLimit = (state: RootState): number => state.posts.limit;
export const selectPostsHasMore = (state: RootState): boolean =>
  state.posts.hasMore;
export const selectPostsStatus = (state: RootState): string =>
  state.posts.status;
export const selectPostsError = (state: RootState): string | null =>
  state.posts.error;
export const selectMaxLimit = (state: RootState): number =>
  state.posts.maxLimit;
