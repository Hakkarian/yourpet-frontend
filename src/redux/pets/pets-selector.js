export const selectAllPets = state => state.pets.items;

export const selectPetsError = state => state.pets.error;

export const selectIsLoading = state => state.pets.isLoading;

export const selectIsPetAdded = state => state.pets.isPetAdded;

export const selectIsPetOrNoticeLoading = state =>
  state.pets.isLoading || state.notices.isLoading;

export const selectIsPetOrNoticeError = state =>
  state.pets.error || state.notices.isError;

export const selectTotalPage = store => store.pets.totalPage;
