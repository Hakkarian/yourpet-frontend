export const selectAllPets = state => state.pets.items;

export const selectPetsError = state => state.pets.error;

export const selectIsLoading = state => state.pets.isLoading;

export const selectIsPetAdded = state => state.pets.isPetAdded;
