import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newMoonDatesApi = createApi({
  reducerPath: 'newMoonDates',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://craigchamberlain.github.io/moon-data/api/new-moon-data',
  }),
  tagTypes: ['NewMoonDates'],
  endpoints: builder => ({
    getNewMoonDatesByYear: builder.query({
      query: year => `/${year}`,
      transformResponse: response =>
        response.map(date => {
          return new Date(date);
        }),
      providesTags: ['NewMoonDates'],
    }),
  }),
});

export const { useGetNewMoonDatesByYearQuery } = newMoonDatesApi;
