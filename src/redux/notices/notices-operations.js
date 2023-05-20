import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { toast } from 'react-hot-toast';
import * as api from 'shared/services/notices-api';

import { instance } from 'shared/services/auth-api';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });

// отримання оголошень по категоріях
export const getNoticeByCategory = createAsyncThunk(
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
          `/notices/title/search/${category}?query=${query}`
        );
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get отримання одного оголошення
// ______ instance.get -> getNoticeById
// _______ `/notices/card/${id}` id 
export const getOneNotice = createAsyncThunk(
  'notices/getOneNotice',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id)
      const { data } = await instance.get(`/notices/card/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// post  додавання оголошення до обраних
export const addToFavorites = createAsyncThunk(
  'notices/addToFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/notices/${id}/favorite/`);
      toast('This notice is now your favorite!', {
        icon: '🌈',
        style: {
          borderRadius: '10px',
          background: 'orange',
          color: '#fff',
        },
      });
                console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get отримання оголошень авторизованого користувача доданих ним же в обрані
export const getFavorites = createAsyncThunk(
  '/notices/getFavorites',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      if (query === null) {
        const { data } = await instance.get(`/notices/user/favorite`, {
          params: { page },
        });
console.log(data);
        return data;
      } else {
        const { data } = await instance.get(
          `/notices/title/favorite?query=${query}`
        );

        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete видалення оголошення авторизованого користувача доданих цим же до обраних
export const deleteFromFavorites = createAsyncThunk(
  'notices/deleteFromFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/notices/${id}/favorite`);
      toast('This notice now is not your favorite.', {
        icon: '🌪️',
        style: {
          borderRadius: '10px',
          background: 'black',
          color: '#fff',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete видалення оголошення авторизованого користувача створеного цим же користувачем
export const deleteUserNotice = createAsyncThunk(
  'notices/deleteUserNotice',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/notices/${id}`);
      toast('This notice has been succesfully deleted.', {
        icon: '🔨',
        style: {
          borderRadius: '10px',
          background: 'darkred',
          color: '#fff',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// post додавання оголошень відповідно до обраної категорії
export const createNotice = createAsyncThunk(
  'notices/createNotice',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNotice(data);
      toast('This notice has been created succesfully!', {
        icon: '🏷️',
        style: {
          borderRadius: '10px',
          background: 'white',
          color: '#000',
        },
      });
      return result.notice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get отримання оголошень авторизованого кoристувача створених цим же користувачем
export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      if (query === null) {
        const { data } = await instance.get(`/notices/user/own`, {
          params: { page },
        });
console.log(data);
        return data;
      } else {
        const { data } = await instance.get(`/notices/title/own?query=${query}`);
console.log(data);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addNotices = createAsyncThunk(
//   'notices/addNotice',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addNotice(data);
//       return result.notice;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   }
// );
