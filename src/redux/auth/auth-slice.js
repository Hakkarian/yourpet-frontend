import { createSlice } from '@reduxjs/toolkit';
import { current, info, login, logout, register } from './auth-operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        token: '',
        isLogin: false,
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
          .addCase(register.pending, state => (state.isLoading = true))
          .addCase(login.pending, state => (state.isLoading = true))
          .addCase(logout.pending, state => (state.isLoading = true))
          .addCase(current.pending, state => (state.isLoading = true))
          .addCase(info.pending, state => state.isLoading = true)
          .addCase(register.rejected, (state, { payload }) => { // action.payload
            state.isLoading = false;
            state.error = payload.error;
          })
          .addCase(login.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.error;
          })
          .addCase(logout.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.error;
          })
          .addCase(current.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          })
          .addCase(info.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.error;
          })
          .addCase(register.fulfilled, (state, { payload }) => {
            const { user, token } = payload;
            state.isLoading = false;
            state.user = user;
            state.token = token;
            state.isLogin = true;
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
          .addCase(current.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            state.isLogin = true;
          })
          .addCase(info.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
      })
    }
})

export default authSlice.reducer;
