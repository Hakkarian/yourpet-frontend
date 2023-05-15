import { createSlice } from '@reduxjs/toolkit';

import { fetchAllNews } from './news-operations';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    operation: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllNews.pending, store => {
        store.isLoading = true;
        store.operation = 'fetch';
        store.error = null;
      })
      .addCase(fetchAllNews.fulfilled, (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload;
        store.operation = null;
      })
      .addCase(fetchAllNews.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
