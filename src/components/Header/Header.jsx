import { useState } from 'react';
import{ useMediaQuery } from 'react-responsive';

import AuthNav from 'components/AuthNav'
import Nav from 'components/Nav/Nav'
import { Link } from 'react-router-dom'
import { AuthWrapCss, HeaderCss, InfoCss, UserWrapCss } from './Header.styled'


import moblogo from '../../images/moblogo1x.png';
import tablogo from '../../images/tablogo1x.png';
import logo from '../../images/logo1x.png';

import { ReactComponent as User } from '../../icons/user.svg';
import { ReactComponent as BurgerMenu } from '../../icons/burger-menu.svg';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';


const Header = () => {
  // const [isAuth, setIsAuth] = useState(true);

  const isLogin = useSelector(selectIsLoggedIn)

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 1279px)',
  });


  return (
    <>
      <HeaderCss>
        <AdaptiveLogo />
        <AuthWrapCss>
          {isLogin ? (
            <>
              <UserWrapCss>
                <Link to="/user">
                  <User width="28" height="28" />
                </Link>
                {isTablet && <InfoCss>Anna</InfoCss>}
              </UserWrapCss>
              {isMobile && <Link>
                <BurgerMenu width="24" height="24" />
              </Link>}
            </>
          ) : (
            <>
              {' '}
              {isDesktop && <Nav />}
              {isTablet && <AuthNav />}
              {isMobile && (
                <Link>
                  <BurgerMenu width="24" height="24" />
                </Link>
              )}
            </>
          )}
        </AuthWrapCss>
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