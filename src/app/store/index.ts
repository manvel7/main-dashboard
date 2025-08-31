import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@features/user/model/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
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
