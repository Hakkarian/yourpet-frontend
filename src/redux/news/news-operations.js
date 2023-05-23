import { createAsyncThunk } from '@reduxjs/toolkit';

import { getNews } from 'shared/services/news-api';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (credential, thunkAPI) => {
    try {
      console.log('fetchNews credential', credential);
      const data = await getNews(credential);

      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
