// export const selectUser = ({ auth }) => auth.user;
export const selectAuth = ({ auth }) => auth;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLogin;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
