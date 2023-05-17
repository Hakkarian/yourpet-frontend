export const selectIsNoticeLoading = state => state.notices.isLoading;
export const selectShouldNoticeRedirect = state => {
  return state.notices.isLoading === 'false' && !state.notices.error;
};

// export const selectAddedNotice = state => state.notices.addedNotice;
