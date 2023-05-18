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
  IconAddPet, AddPetButtonWrp
} from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import plus from '../../../icons/plus.svg';

import { useToggle } from 'shared/hooks/useToggle';
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
    const {open} = useToggle();

  const openAddPet = () => {
      if (isLoggedIn) {
        open();
      } else   
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
          <BoxNav><AddPetButtonWrp onClick={openAddPet}>
            <AddPetButton to={'/add-pet'} ></AddPetButton >
              <Span>Add pet</Span>
              <IconAddPet src={plus} alt="add-pet"/>
            </AddPetButtonWrp>
          </BoxNav>
        </ListNav>
      </NavStyle>
    </>
  );
};

export default NoticesCategoriesNav;
