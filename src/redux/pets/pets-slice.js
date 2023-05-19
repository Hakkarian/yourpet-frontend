import { createSlice } from '@reduxjs/toolkit';

import { getAllPets, addPets, deletePets } from './pets-operations';

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    isPetAdded: false,
  },
  reducers: {
    changeIsPetAdded(state) {
      state.isPetAdded = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllPets.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllPets.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllPets.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addPets.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isPetAdded = false;
      })
      .addCase(addPets.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
        state.isPetAdded = true;
      })
      .addCase(addPets.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isPetAdded = false;
      })
      .addCase(deletePets.pending, state => {
        state.isLoading = true;
        // state.error = null;
      })
      .addCase(deletePets.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletePets.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

const petsReducer = petsSlice.reducer;
export const { changeIsPetAdded } = petsSlice.actions;

export default petsReducer;
