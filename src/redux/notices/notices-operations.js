import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/services/notices-api';
// import { addNotice } from 'shared/services/notices-api';

export const addNotices = createAsyncThunk(
  'pets/addPets',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNotice(data);
      console.log('result', result);
      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
