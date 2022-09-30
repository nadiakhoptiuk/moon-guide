import { configureStore } from '@reduxjs/toolkit';
import birthDateReducer from './birthDateReducer/birthDateSlice';

export const store = configureStore({
  reducer: {
    birthDate: birthDateReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
