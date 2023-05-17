import { useSelector } from 'react-redux';
import {
  NavStyle,
  ButtonNav,
  ListNav,
  ItemNav,
  WrapperNav,
  ContainerNav,
  BoxNav,
  AddPetButton,
  Span,
  IconAddPet,
} from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import plus from '../../../icons/plus.svg';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

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

  const openAddPet = () => {
    if (isLoggedIn) {
      <NavLink to={'/add-pet'}></NavLink>
    }
  toast.error('You need to authorize in to access this page');
}

  return (
    <>
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
          <BoxNav>
            <AddPetButton onClick={openAddPet}>
              <Span>Add pet</Span>
              <IconAddPet src={plus} alt="add-pet"/>
            </AddPetButton >
          </BoxNav>
        </ListNav>
      </NavStyle>
    </>
  );
};

export default NoticesCategoriesNav;
