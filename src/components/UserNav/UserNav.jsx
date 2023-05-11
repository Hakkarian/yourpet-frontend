import React from 'react';
import { /*Link */ NavLink } from 'react-router-dom';
import { UserNavCss } from './UserNav.styled';

const UserNav = () => {
  return (
    <UserNavCss>
      <NavLink to="/users">User</NavLink>
    </UserNavCss>
  );
};

export default UserNav;
