import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import * as api from 'shared/services/pets-api';

export const getAllPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/pets');
      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const addPets = createAsyncThunk(
  'pets/addPets',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addPet(data);
      toast('Your little cutie has been added succesfully :3', {
        icon: '🐶',
        style: {
          borderRadius: '10px',
          background: 'darkgreen',
          color: '#fff',
        },
      });
      return result.newPet;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePets = createAsyncThunk(
  'pets/deletePets',
  async (petsId, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/pets/${petsId}`);
      toast('Your pet has been deleted succesfully.', {
        icon: '🙈',
        style: {
          borderRadius: '10px',
          background: 'darkred',
          color: '#fff',
        },
      });
      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
