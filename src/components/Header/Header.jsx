import {useState} from 'react';
import AuthNav from 'components/AuthNav'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthWrapCss, HeaderCss, InfoCss, UserWrapCss } from './Header.styled'


import moblogo from '../../images/moblogo1x.png';
import tablogo from '../../images/tablogo1x.png';
import logo from '../../images/logo1x.png';
import user from '../../icons/user.svg';
import burgerMenu from '../../icons/burger-menu.svg';

const Header = () => {
  // const [open, setOpen] = useState(false)

  // const handleOpen = () => {
  //   setOpen(true)
  // }

  return (
    <>
      <HeaderCss>
        <AdaptiveLogo />
        <AuthWrapCss>
          <UserWrapCss>
            <Link to="/user">
              <img src={user} alt="user" width='24' height='24' />
            </Link>
            <InfoCss>Anna</InfoCss>
          </UserWrapCss>
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
    </>
  );
}

const AdaptiveLogo = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  console.log(window.innerWidth);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
    if (window.innerWidth < 1280) {
      setIsMedium(true);
    } else {
      setIsMedium(false);
    }
  };

  window.addEventListener('resize', handleResize);
  return (
    <Link to="/main">
      <img src={isSmall ? moblogo : isMedium ? tablogo : logo} alt="Logo" />
    </Link>
  );
};

export default Header