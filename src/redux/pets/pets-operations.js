import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import * as api from 'shared/services/pets-api';

export const getAllPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.fetchPets();
      return response.pets;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
  async (petId, { rejectWithValue }) => {
    try {
      await api.deletePet(petId);
      toast('Your pet has been deleted succesfully.', {
        icon: '🙈',
        style: {
          borderRadius: '10px',
          background: 'darkred',
          color: '#fff',
        },
      });
      return petId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
