import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/services/notices-api';

export const addNotices = createAsyncThunk(
  'notices/addNotice',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNotice(data);
      return result.notice;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
