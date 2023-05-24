import { createSlice } from '@reduxjs/toolkit';

import { fetchNews } from './news-operations';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    totalPage: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchNews.fulfilled, (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload.news;
        store.totalPage = action.payload.total
          ? Math.ceil(action.payload.total / action.payload.per_page)
          : 0;
      })
      .addCase(fetchNews.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
