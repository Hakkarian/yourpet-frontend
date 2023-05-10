import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {registere, logine, logoute, currente} from 'shared/services/auth-api'

export const register = createAsyncThunk('register', async(data, { rejectWithValue }) => {
    try {
        const result = await registere(data);
        toast('Success! Now you can login.', {
          icon: '😊',
          style: {
            borderRadius: '10px',
            background: 'darkgreen',
            color: '#fff',
          },
        });
        return result;
    } catch ({response}) { //error.response
        if (response.status === 400) {
            toast(
              'Please enter the correct value. For example, "name: apple, email: apple@gmail.com, password: 123apple"',
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
        return rejectWithValue(response);
    }
})

export const login = createAsyncThunk('login', async (data, { rejectWithValue }) => {
    try {
        const result = await logine(data)
        toast('Long time no see!', {
          icon: '😉',
          style: {
            borderRadius: '10px',
            background: 'darkgreen',
            color: '#fff',
          },
        });
        return result;
    } catch ({response}) {
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
        return rejectWithValue(response)
    }
})

export const logout = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        const result = await logoute()
        toast('See you later, aligater!', {
          icon: '👋',
          style: {
            borderRadius: '10px',
            background: 'darkblue',
            color: '#fff',
          },
        });
        return result;
    } catch ({response}) {
        return rejectWithValue(response);
    }
})

export const current = createAsyncThunk('current', async (_, { rejectWithValue, getState }) => {
    try {
        const { auth } = getState();
        const result = await currente(auth.token);
        toast('Checking updates...', {
          icon: '⏳',
          style: {
            borderRadius: '10px',
            background: 'darkorange',
            color: '#fff',
          },
        });
        return result;
    } catch ({response}) {
        return rejectWithValue(response)
    }
}, {
    condition: (_, { getState }) => {
        const { auth } = getState();
        if (!auth.token) {
            return false;
        }
    }
})
