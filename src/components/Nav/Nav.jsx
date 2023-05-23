import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavCss } from './Nav.styled';

const Nav = () => {
  return (
    <NavCss>
      <li>
        <NavLink className="link" to="/news">
          News
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/notices">
          Find pet
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/friends">
          Our friends
        </NavLink>
      </li>
    </NavCss>
  );
};

export default Nav;
