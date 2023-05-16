import { createSlice } from '@reduxjs/toolkit';

import { addNotices } from './notices-operations';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(addNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNotices.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addNotices.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export default noticesSlice.reducer;
