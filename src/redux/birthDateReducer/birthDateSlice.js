import { createSlice } from '@reduxjs/toolkit';

export const birthDateSlice = createSlice({
  name: 'birthDate',
  initialState: '1969-11-20',
  reducers: {
    setBirthDate: (_, { payload }) => {
      return payload;
    },
  },
});

export default birthDateSlice.reducer;
export const { setBirthDate } = birthDateSlice.actions;
