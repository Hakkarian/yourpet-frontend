import React from 'react';
import { NavCss, NavLinkCss } from './Nav.styled';

const Nav = () => {
  return (
    <NavCss>
      <NavLinkCss>News</NavLinkCss>
      <NavLinkCss to="/notices">Find pet</NavLinkCss>
      <NavLinkCss to="/friends">Our friends</NavLinkCss>
    </NavCss>
  );
};

export default Nav;
