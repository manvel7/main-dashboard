import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@features/user/model/userSlice';
import postsReducer from '@features/posts/model/postsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
