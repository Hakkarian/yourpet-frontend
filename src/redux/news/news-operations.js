import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllNews } from 'shared/services/news-api';

export const fetchAllNews = createAsyncThunk(
  'news/fetchAllNews',
  async (_, thunkAPI) => {
    try {
      const data = await getAllNews();
      return data.news;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
