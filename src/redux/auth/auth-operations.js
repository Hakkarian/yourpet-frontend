import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  registere,
  logine,
  logoute,
  infoService,
  instance,
  setAuthHeader,
  getUserInfoService,
} from 'shared/services/auth-api';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await registere(data);
      toast('Success!', {
        icon: '😊',
        style: {
          borderRadius: '10px',
          background: 'darkgreen',
          color: '#fff',
        },
      });
      
      return result;
    } catch ({response}) {
      //error.response
      if (response.status === 400) {
        toast(
          'Please enter the correct value. For example, "email: apple@gmail.com, password: Pass1234',
          {
            icon: '🚫',
            style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#000',
            },
          }
        );
      }
      if (response.status === 409) {
        toast('Email in use', {
          icon: '🚫',
          style: {
            borderRadius: '10px',
            background: '#fff',
            color: '#000',
          },
        });
      }
      return rejectWithValue(response);
    }
  }
);



export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      console.log('log operation before')
      const result = await logine(data);
      toast('Long time no see!', {
        icon: '😉',
        style: {
          borderRadius: '10px',
          background: 'darkgreen',
          color: '#fff',
        },
      });
      return result;
    } catch ({ response }) {
      if (response.status === 400) {
              console.log('log operation error');
        toast(
          'Please enter the correct value. For example, "email: apple@gmail.com, password: 123apple"',
          {
            icon: '🚫',
            style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#000',
            },
          }
        );
      }

      if (response.status === 401) {
        toast('Email or password is wrong', {
          icon: '🚫',
          style: {
            borderRadius: '10px',
            background: '#fff',
            color: '#000',
          },
        });
      }

      return rejectWithValue(response);
    }
  }
);

export const logout = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logoute();
      toast('See you later, aligater!', {
        icon: '👋',
        style: {
          borderRadius: '10px',
          background: 'darkblue',
          color: '#fff',
        },
      });
      return result;
    } catch ({ response }) {
      toast('Not authorized', {
        icon: '🚫',
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#000',
        },
      });
      return rejectWithValue(response);
    }
  }
);

export const info = createAsyncThunk(
  '/user/info',
  async (data, { rejectWithValue }) => {
    try {
      console.log('before info operation')
      const result = await infoService(data);
      toast('Changed succesfully!', {
        icon: '😊',
        style: {
          borderRadius: '10px',
          background: 'darkgreen',
          color: '#fff',
        },
      });
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     console.log(state)
//     const persistedToken = state.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       const res = await refreshUserService(persistedToken);
//       toast('Checking updates...', {
//         icon: '⏳',
//         style: {
//           borderRadius: '10px',
//           background: 'darkorange',
//           color: '#fff',
//         },
//       });
//       return res.data;
//     } catch (error) {
//       state.auth.isLogin = false;
//       state.auth.token = null;
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log('refresh token', state.auth.token)
    const persistedToken = state.auth.token;
    console.log('refresh operation', persistedToken)

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await instance.get('/user/current');
       toast('Checking updates...', {
        icon: '⏳',
        style: {
          borderRadius: '10px',
          background: 'darkorange',
          color: '#fff',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'auth/userInfo',
  async (_, thunkAPI) => {
    
    try {
      // setAuthHeader(persistedToken);
      console.log('before userinfo operation');
      const  data  = await getUserInfoService();
      console.log('userinfo operation', data);
      console.log('after userinfo operation');
      //  toast('Checking updates...', {
      //   icon: '⏳',
      //   style: {
      //     borderRadius: '10px',
      //     background: 'darkorange',
      //     color: '#fff',
      //   },
      // });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
