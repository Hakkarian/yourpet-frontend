import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth, selectIsLoggedIn } from 'redux/auth/auth-selector';

const RestrictedView = () => {
      const isLogin = useSelector(selectIsLoggedIn);
  const auth = useSelector(selectAuth);
  if(!isLogin && auth.token) {
    return <div>Loading...</div>
  }
      if (isLogin && auth.token) {
        return <Navigate to="/user" />;
      }
      return <Outlet />;
}

export default RestrictedView;