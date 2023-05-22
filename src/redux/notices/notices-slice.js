import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticeByCategory,
  getOneNotice,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  deleteUserNotice,
  createNotice,
  getUserNotices,
  getAllFavorites,
  getAllUserNotices,
} from './notices-operations';

const initialState = {
  noticesByCategory: [],
  oneNoticeMoreInfo: [],
  allFavoritesPets: [],
  allOwnPets: [],
  totalPage: null,
  isFavorite: false,
  isLoading: false,
  isError: null,
  isNoticeAdded: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    changeIsNoticeAdded(state) {
      state.isNoticeAdded = false;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFavNotices(state, { payload }) {
      state.favNotices = state.favNotices.filter(
        notice => notice._id !== payload
      );
    },
    setNotices(state, { payload }) {
      state.items = state.items.filter(item => item._id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNoticeByCategory.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getNoticeByCategory.fulfilled, (state, action) => {
        state.noticesByCategory = action.payload.notices;
        state.totalPage = action.payload.total
          ? Math.ceil(action.payload.total / action.payload.per_page)
          : 0;
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
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.allFavoritesPets.push(payload);
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
        state.totalPage = payload.total
          ? Math.ceil(payload.total / payload.per_page)
          : 0;
        state.noticesByCategory = payload.notices;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        state.noticesByCategory = [];
      })
      .addCase(getAllFavorites.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getAllFavorites.fulfilled, (state, { payload }) => {
        state.allFavoritesPets = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getAllFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        state.allFavoritesPets = [];
      })
      .addCase(deleteFromFavorites.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, { payload }) => {
        state.allFavoritesPets = state.allFavoritesPets.filter(
          ({ _id }) => _id !== payload
        );
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
      .addCase(deleteUserNotice.fulfilled, (state, { payload }) => {
        state.noticesByCategory = state.noticesByCategory.filter(({ _id }) => {
          return _id !== payload;
        });
        state.allFavoritesPets = state.allFavoritesPets.filter(({ _id }) => {
          return _id !== payload;
        });
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
      .addCase(createNotice.fulfilled, (state, { payload }) => {
        state.isNoticeAdded = true;
        state.allOwnPets.push(payload);
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
        state.isError = null;
      })
      .addCase(getUserNotices.fulfilled, (state, { payload }) => {
        state.noticesByCategory = payload.notices;
        state.totalPage = payload.total
          ? Math.ceil(payload.total / payload.per_page)
          : 0;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getUserNotices.rejected, (state, { payload }) => {
        state.noticesByCategory = [];
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getAllUserNotices.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getAllUserNotices.fulfilled, (state, { payload }) => {
        state.allOwnPets = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getAllUserNotices.rejected, (state, { payload }) => {
        state.allOwnPets = [];
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export default noticesSlice.reducer;
export const { setPage, changeIsNoticeAdded, setNotices, setFavNotices } =
  noticesSlice.actions;
