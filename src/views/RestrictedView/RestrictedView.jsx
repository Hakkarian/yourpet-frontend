import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selector';

const RestrictedView = () => {
      const isLogin = useSelector(selectIsLoggedIn);
      const user = useSelector(selectUser);
      if (isLogin && user.token) {
        return <Navigate to="/user" />;
      }
      return <Outlet />;
}

export default RestrictedView;