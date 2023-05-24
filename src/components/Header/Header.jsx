import { useState } from 'react';
import MediaQuery from 'react-responsive';

import AuthNav from 'components/AuthNav';
import Nav from 'components/Nav/Nav';
import { Link } from 'react-router-dom';
import { AuthWrapCss, HeaderCss, InfoCss, UserCss, UserWrapCss } from './Header.styled';

import moblogo from '../../images/moblogo1x.png';
import tablogo from '../../images/tablogo1x.png';
import logo from '../../images/logo1x.png';

import { ReactComponent as BurgerMenu } from '../../icons/burger-menu.svg';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
// --------------------------------------------| МОДАЛКА |--------------|
import { useContext } from 'react';
import { ModalContext } from 'shared/components/Modalll/utils/ModalProvider';
import Modalll from 'shared/components/Modalll/Modalll';
import BurgerMenuPage from 'components/BurgerMenu/BurgerMenuPage';
import { Container } from 'shared/components/Container/Container.styled';
// ---------------------------------------------------------------------|

const Header = () => {
  const { isOpenContext, toggleContext } = useContext(ModalContext);

  const isLogin = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      <HeaderCss>
        <AdaptiveLogo />
        <MediaQuery minWidth={1280}>
          <Nav />
        </MediaQuery>
        <AuthWrapCss>
          {isLogin ? (
            <UserWrapCss>
              <Link to="/user">
                <UserCss width="30" height="30" />
              </Link>
              <MediaQuery minWidth={768}>
                <InfoCss>{name || 'Stranger'}</InfoCss>
              </MediaQuery>
            </UserWrapCss>
          ) : (
            <MediaQuery minWidth={768}>
              <AuthNav />
            </MediaQuery>
          )}
          <MediaQuery maxWidth={1279}>
            <Link onClick={toggleContext}>
              <BurgerMenu width="24" height="24" />
            </Link>
          </MediaQuery>
        </AuthWrapCss>

        {isOpenContext && (
          <Modalll toggleModal={toggleContext}>
            <BurgerMenuPage onClick={toggleContext} />
          </Modalll>
        )}
      </HeaderCss>
    </Container>
  );
};

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

export default Header;
