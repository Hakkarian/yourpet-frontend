import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth, selectIsLoggedIn } from 'redux/auth/auth-selector'

const PrivateView = () => {
    const isLogin = useSelector(selectIsLoggedIn);
  const auth = useSelector(selectAuth);
    if (!isLogin && !auth.token) {
        return <Navigate to='/login' />
  }
  return <Outlet />
}

export default PrivateView