import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthNavCss, PawCss } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavCss>
      <li>
        <NavLink className="link" style={{ minWidth: '165px' }} to="/login">
          Log IN
          <PawCss width="24" height="24" fill="none" />
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/register">
          Register
        </NavLink>
      </li>
    </AuthNavCss>
  );
};

export default AuthNav;
