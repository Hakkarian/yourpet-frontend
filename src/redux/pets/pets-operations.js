import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllPets = createAsyncThunk(
    'pets/fetchAll',
     async(_, thunkAPI) => {
        try {
            const response = await axios.get("/pets");
            return response.data;
        } catch ({response}) {
            return thunkAPI.rejectWithValue(response.data.message);
        };
    },
);

export const addPets = createAsyncThunk(
    'pets/addPets',
    async(data, {rejectWithValue}) => {
        try {
            const result = await axios.post("/pets", data);
            return result.data;
        } catch ({response}) {
            return rejectWithValue(response.data.message);
        };
    },
);

export const deletePets = createAsyncThunk(
    'pets/deletePets',
    async(petsId, {rejectWithValue}) => {
        try {
          const result = await axios.delete(`/pets/${petsId}`);
          return result.data;
        } catch ({response}) {
            return rejectWithValue(response.data.message);
        };
    },
);