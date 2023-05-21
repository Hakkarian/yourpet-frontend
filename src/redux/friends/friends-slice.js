import { createSlice } from '@reduxjs/toolkit';

import { fetchFriends } from './friends-operations';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchFriends.fulfilled, (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload;
      })
      .addCase(fetchFriends.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default friendsSlice.reducer;
