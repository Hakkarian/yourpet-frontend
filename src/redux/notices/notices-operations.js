import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'process.env.REACT_APP_API_URL',
});

// отримання оголошень по категоріях
const getNoticesByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async ({ category, query, page }, { rejectWithValue }) => {
    try {
      if (query === null) {
        const { data } = await instance.get(`/notices/${category}`, {
          params: { page },
        });
        return data;
      } else {
        const { data } = await instance.get(
          `/notices/${category}?query=${query}`
        );
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get отримання одного оголошення
const getOneNotice = createAsyncThunk(
  'notices/getOneNotice',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/notices/card/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// post  додавання оголошення до обраних
const addToFavorites = createAsyncThunk(
  'notices/addToFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/notices/${id}/favorite/`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get отримання оголошень авторизованого користувача доданих ним же в обрані
const getFavorites = createAsyncThunk(
  '/notices/getFavorites',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      if (query === null) {
        const { data } = await instance.get(`/notices/user/favorite`, {
          params: { page },
        });

        return data;
      } else {
        const { data } = await instance.get(
          `/notices/user/favorite?query=${query}`
        );

        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete видалення оголошення авторизованого користувача доданих цим же до обраних
const deleteFromFavorites = createAsyncThunk(
  'notices/deleteFromFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/notices/${id}/favorite`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete видалення оголошення авторизованого користувача створеного цим же користувачем
const deleteUserNotice = createAsyncThunk(
  'notices/deleteUserNotice',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/notices/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// post додавання оголошень відповідно до обраної категорії
const createNotice = createAsyncThunk(
  'notices/createNotice',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/notices', credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get отримання оголошень авторизованого кoристувача створених цим же користувачем
const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      if (query === null) {
        const { data } = await instance.get(`/notices/user/own`, {
          params: { page },
        });

        return data;
      } else {
        const { data } = await instance.get(`/notices/user/own?query=${query}`);

        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  getNoticesByCategory,
  getOneNotice,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  createNotice,
  getUserNotices,
  deleteUserNotice,
};

export default operations;
