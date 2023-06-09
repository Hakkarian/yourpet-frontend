import { useSelector } from 'react-redux';
import {
  NavStyle,
  ButtonNav,
  ListNav,
  ItemNav,
  WrapperNav,
  ContainerNav,
} from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import AddNoticePetButton from '../AddPetButton/AddPetBtn';
import AddPetButtonMobile from '../AddPetButton/AddPetBtnMobile';
import MediaQuery from 'react-responsive';

const buttons = [
  {
    btn: 'sell',
    link: 'sell',
  },
  {
    btn: 'lost/found',
    link: 'lost-found',
  },
  {
    btn: 'in good hands',
    link: 'for-free',
  },
];

const authButtons = [
  {
    btn: 'favorite ads',
    link: 'favorites-ads',
  },
  {
    btn: 'my ads',
    link: 'my-ads',
  },
];

const NoticesCategoriesNav = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
      <NavStyle>
        <ListNav>
          <ContainerNav>
            {buttons.map((button, index) => (
              <ItemNav key={index}>
                <ButtonNav to={'/notices/' + button.link} name={button.link}>
                  {button.btn}
                </ButtonNav>
              </ItemNav>
            ))}
          </ContainerNav>

          <WrapperNav>
            {isLoggedIn &&
              authButtons.map((button, index) => (
                <ItemNav key={index}>
                  <ButtonNav to={'/notices/' + button.link} name={button.link}>
                    {button.btn}
                  </ButtonNav>
                </ItemNav>
              ))}
          </WrapperNav>

          <MediaQuery maxWidth={767}>
            <AddPetButtonMobile />
          </MediaQuery>
        </ListNav>
        <MediaQuery minWidth={768}>
          <AddNoticePetButton />
        </MediaQuery>
      </NavStyle>
  );
};

export default NoticesCategoriesNav;
