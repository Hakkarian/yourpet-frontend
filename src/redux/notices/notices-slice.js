import { createSlice } from '@reduxjs/toolkit';
import {
  addNotices,
  getNoticeByCategory,
  getOneNotice,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  deleteUserNotice,
  createNotice,
  getUserNotices,
} from './notices-operations';

// const handlePending = state => {
//   state.isLoading = true;
//   state.isError = null;
// };

const initialState = {
  noticesByCategory: [],
  oneNoticeMoreInfo: [],
  totalPages: 1,
  isFavorite: false,
  isLoading: false,
  isError: null,
  isNoticeAdded: false,
};

const noticesSlice = createSlice({
  name: 'notices',

  initialState,
  extraReducers: builder => {
    builder
      .addCase(addNotices.pending, state => {
        state.isLoading = true;
        // state.addedNotice = false;
      })
      .addCase(addNotices.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isError = null;
        state.isLoading = false;
        // state.addedNotice = true;
      })
      .addCase(addNotices.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      })

      .addCase(getNoticeByCategory.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getNoticeByCategory.fulfilled, (state, { payload }) => {
        state.noticesByCategory = payload.notices;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getNoticeByCategory.rejected, (state, { payload }) => {
        state.noticesByCategory = [];
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getOneNotice.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getOneNotice.fulfilled, (state, { payload }) => {
        state.oneNoticeMoreInfo = payload;
        console.log(payload);
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getOneNotice.rejected, (state, { payload }) => {
        state.oneNoticeMoreInfo = null;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(addToFavorites.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addToFavorites.fulfilled, (state, _) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(addToFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getFavorites.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.noticesByCategory = payload.notices;
         state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.isError = null;
  })
  
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteFromFavorites.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, _) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(deleteFromFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(deleteUserNotice.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteUserNotice.fulfilled, (state, _) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(deleteUserNotice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(createNotice.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createNotice.fulfilled, (state, _) => {
        state.isNoticeAdded = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(createNotice.rejected, (state, { payload }) => {
        state.isNoticeAdded = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getUserNotices.pending, state => {
        state.isLoading = true;
        state.isError = null
      })
      .addCase(getUserNotices.fulfilled, (state, { payload }) => {
        state.noticesByCategory = payload.notices;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getUserNotices.rejected, (state, { payload }) => {
        state.noticesByCategory = [];
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export default noticesSlice.reducer;

//  .addCase(addPets.fulfilled, (state, { payload }) => {
//         state.items.push(payload);
//         state.error = null;
//         state.isLoading = false;
//       })
