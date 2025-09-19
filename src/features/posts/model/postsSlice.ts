import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  items: Post[];
  page: number;
  limit: number;
  hasMore: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  maxLimit: number;
}

const initialState: PostsState = {
  items: [],
  page: 1,
  limit: 5,
  hasMore: true,
  status: 'idle',
  error: null,
  maxLimit: 10,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (
    { page, limit }: { page: number; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    resetPosts: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        console.log(
          'Redux: Received posts:',
          action.payload.length,
          'Current total:',
          state.items.length,
          'New total:',
          state.items.length + action.payload.length
        );
        state.items = [...state.items, ...action.payload];
        state.page += 1;
        state.hasMore = state.items.length < state.maxLimit;
        console.log(
          'Redux: Updated hasMore to:',
          state.hasMore,
          'items.length:',
          state.items.length,
          'maxLimit:',
          state.maxLimit
        );
      })
      .addCase(fetchPosts.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;
