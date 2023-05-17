import { createSlice } from '@reduxjs/toolkit';

import { addNotices } from './notices-operations';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    error: null,
    isLoading: false,
    // addedNotice: false,
  },
  extraReducers: builder => {
    builder
      .addCase(addNotices.pending, state => {
        state.isLoading = true;
        // state.addedNotice = false;
      })
      .addCase(addNotices.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.error = null;
        state.isLoading = false;
        // state.addedNotice = true;
      })
      .addCase(addNotices.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        // state.addedNotice = false;
      });
  },
});

export default noticesSlice.reducer;

//  .addCase(addPets.fulfilled, (state, { payload }) => {
//         state.items.push(payload);
//         state.error = null;
//         state.isLoading = false;
//       })
