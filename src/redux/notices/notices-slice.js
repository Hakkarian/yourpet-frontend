import { createSlice } from '@reduxjs/toolkit';
import operations from './notices-operations';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

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
  extraReducers: {

      
    [operations.getNoticesByCategory.pending]: handlePending,
    [operations.getNoticesByCategory.fulfilled](state, { payload }) {
      state.noticesByCategory = payload.notices;
      state.totalPages = payload.totalPages;
      state.isLoading = false;
      state.isError = null;
    },
    [operations.getNoticesByCategory.rejected](state, { payload }) {
      state.noticesByCategory = [];
      state.isLoading = false;
      state.isError = payload;
    },

      [operations.getOneNotice.pending]: handlePending,
    [operations.getOneNotice.fulfilled](state, { payload }) {
      state.oneNoticeMoreInfo = payload;
      state.isLoading = false;
      state.isError = null;
    },
    [operations.getOneNotice.rejected](state, { payload }) {
      state.oneNoticeMoreInfo = null;
      state.isLoading = false;
      state.isError = payload;
    },

    [operations.addToFavorites.pending]: handlePending,
    [operations.addToFavorites.fulfilled](state, _) {
      state.isLoading = false;
      state.isError = null;
    },
    [operations.addToFavorites.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
    },

      [operations.getFavorites.pending]: handlePending,
    [operations.getFavorites.fulfilled](state, { payload }) {
      state.noticesByCategory = payload.notices;
      state.totalPages = payload.totalPages;
      state.isLoading = false;
      state.isError = null;
    },
    [operations.getFavorites.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
    },

      [operations.deleteFromFavorites.pending]: handlePending,
    [operations.deleteFromFavorites.fulfilled](state, _) {
      state.isLoading = false;
      state.isError = null;
    },
    [operations.deleteFromFavorites.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
    },

    [operations.deleteUserNotice.pending]: handlePending,
    [operations.deleteUserNotice.fulfilled](state, _) {
      state.isLoading = false;
      state.isError = null;
    },
    [operations.deleteUserNotice.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
    },

    [operations.createNotice.pending]: handlePending,
    [operations.createNotice.fulfilled](state, _) {
      state.isNoticeAdded = true;
      state.isLoading = false;
      state.isError = null;
    },
    [operations.createNotice.rejected](state, { payload }) {
      state.isNoticeAdded = false;
      state.isLoading = false;
      state.isError = payload;
    },

    [operations.getUserNotices.pending]: handlePending,
    [operations.getUserNotices.fulfilled](state, { payload }) {
      state.noticesByCategory = payload.notices;
      state.totalPages = payload.totalPages;
      state.isLoading = false;
      state.isError = null;
    },
    [operations.getUserNotices.rejected](state, { payload }) {
      state.noticesByCategory = [];
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

export default noticesSlice.reducer;
