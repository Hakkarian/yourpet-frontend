// export const selectUser = ({ auth }) => auth.user;
export const selectAuth = ({ auth }) => auth;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLogin;
export const selectIsRegistered = state => state.auth.isRegister;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectIsInputUpdated = state => state.auth.isInputUpdated;
