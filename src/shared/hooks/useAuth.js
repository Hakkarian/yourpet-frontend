import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  // ____
  selectIsRegistered,
  // __________
} from 'redux/auth/auth-selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  // ______________
  const isRegisteredIn = useSelector(selectIsRegistered);
  // _______________

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
    // _____
    isRegisteredIn
    // ________
  };
};
