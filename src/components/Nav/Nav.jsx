import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavCss } from './Nav.styled';

const Nav = () => {
  return (
    <NavCss>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </NavCss>
  );
}

export default Nav