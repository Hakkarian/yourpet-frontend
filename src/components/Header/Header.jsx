import {useState} from 'react';
import AuthNav from 'components/AuthNav'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthWrapCss, HeaderCss, InfoCss, NavConnect, UserWrapCss } from './Header.styled'


import moblogo from '../../images/moblogo1x.png';
import tablogo from '../../images/tablogo1x.png';
import logo from '../../images/logo1x.png';

import { ReactComponent as User } from '../../icons/user.svg';
import { ReactComponent as BurgerMenu } from '../../icons/burger-menu.svg';

const Header = () => {
  // const [isAuth, setIsAuth] = useState(true);

  const isAuth = false;

  return (
    <>
      <HeaderCss>
        <AdaptiveLogo />
        <AuthWrapCss>
          {isAuth ? (
            <>
              <UserWrapCss>
                <Link to="/user">
                  <User width="24" height="24" />
                </Link>
                <InfoCss>Anna</InfoCss>
              </UserWrapCss>{' '}
              <Link>
                <BurgerMenu width="24" height="24" />
              </Link>
            </>
          ) : (
              <Link>
                <BurgerMenu width="24" height="24" />
              </Link>
          )}
        </AuthWrapCss>
        <NavConnect>
          <Nav />
          <AuthNav />
          <UserNav />
        </NavConnect>
      </HeaderCss>
    </>
  );
}

const AdaptiveLogo = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

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