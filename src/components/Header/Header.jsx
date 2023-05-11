import AuthNav from 'components/AuthNav'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthWrapCss, HeaderCss } from './Header.styled'


import logo from '../../images/moblogo1x.png';
import user from '../../icons/user.svg';
import burgerMenu from '../../icons/burger-menu.svg';

const Header = () => {
  return (
    <HeaderCss>
      <Link to="/main">
        <img src={logo} alt="your pet" width="115" height="20" />
      </Link>
      <AuthWrapCss>
        <Link>
          <img src={user} alt="user" />
        </Link>
        <Link>
          <img src={burgerMenu} alt="burger-menu" />
        </Link>
      </AuthWrapCss>
      <nav>
        <Nav />
        <AuthNav />
        <UserNav />
      </nav>
    </HeaderCss>
  );
}

export default Header