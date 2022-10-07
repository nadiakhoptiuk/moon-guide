import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import birthDateReducer from './birthDateReducer/birthDateSlice';
import { newMoonDatesApi } from './newMoonDates/newMoonDatesApi';

export const store = configureStore({
  reducer: {
    birthDate: birthDateReducer,
    [newMoonDatesApi.reducerPath]: newMoonDatesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: newMoonDatesApi,
      },
    }),
    newMoonDatesApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
