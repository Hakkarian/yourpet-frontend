import { createAsyncThunk } from '@reduxjs/toolkit';

import { getNews } from 'shared/services/news-api';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (credential, thunkAPI) => {
    try {
      const data = await getNews(credential);
      console.log('fetch news data--->', data);

      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
