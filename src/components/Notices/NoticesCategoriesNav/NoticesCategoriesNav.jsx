import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavStyle, ButtonNav } from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavStyle>
        <ButtonNav>
          <NavLink to="/notices/sell">sell</NavLink>
        </ButtonNav>
        <ButtonNav>
          <NavLink to="/notices/lost-found">lost/found</NavLink>
        </ButtonNav>
        <ButtonNav>
          <NavLink to="/notices/for-free">in good hands</NavLink>
        </ButtonNav>
                {isLoggedIn && <>
            <ButtonNav>
              <NavLink to="/notices/favorite">favorite ads</NavLink>
            </ButtonNav>
            <ButtonNav>
              <NavLink to="/notices/own">my ads</NavLink>
            </ButtonNav>
          </>
        }
      </NavStyle>
      <Outlet />
    </>
  );
};

export default NoticesCategoriesNav;
