import { createSlice } from '@reduxjs/toolkit';
import {
  info,
  login,
  logout,
  register,
  refreshUser,
  getUserInfo,
} from './auth-operations';
import { setToken } from 'shared/services/auth-api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isLogin: false,
    isRegister: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
    isInputUpdated: false,
    inputUpdateinError: false,
  },
  reducers: {
    googleAuth: (state, { payload }) => {
      setToken(payload.token);
      console.log(payload);
      state.token = payload.token;
      state.isLogin = true;
      state.isLoading = false;
      state.user = payload.user;
    },
    changeIsInputUpdatedStatus: state => {
      state.isInputUpdated = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(info.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.inputUpdateinError = null;
        state.isInputUpdated = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        // action.payload
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(info.rejected, (state, { payload }) => {
        console.log('here info slice');
        console.log('user info rej', payload);
        state.isLoading = false;
        // state.error = payload;
        state.inputUpdateinError = payload;
        state.isInputUpdated = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        state.isRegister = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(info.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log('payload', payload);
        if (payload.user) {
          state.user = payload.user;
        }
        state.error = null;
        state.isLogin = true;
        state.isInputUpdated = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLogin = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        // console.log('here user info slice');
        // console.log('user info fulf', payload.user);
        state.user = payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        console.log('here user info slice');
        console.log('user info rejected', payload);
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { googleAuth, changeIsInputUpdatedStatus } = authSlice.actions;

export default authSlice.reducer;
