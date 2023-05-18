import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllFriend } from '../../shared/services/friends-api';

export const fetchFriends = createAsyncThunk(
  'news/friend',
  async (_, thunkAPI) => {
    try {
      const data = await getAllFriend();
      return data.news;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);