import { useSelector } from 'react-redux';
import {
  NavStyle,
  ButtonNav,
  ListNav,
  ItemNav,
  WrapperNav,
  ContainerNav,
  // BoxNav,
  // AddPetButton,
  // Span,
  // IconAddPet,
  // AddPetButtonWrp,
} from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
// import { selectIsError } from 'redux/notices/notices-selector';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { changeIsNoticeAdded, setPage } from 'redux/notices/notices-slice';
// import plus from '../../../icons/plus.svg';
import AddNoticePetButton from '../AddPetButton/AddPetBtn';
import AddPetButtonMobile  from '../AddPetButton/AddPetBtnMobile'
// import { useToggle } from 'shared/hooks/useToggle';
// import { toast } from 'react-toastify';
// import ModalAddPet from 'components/Modals/ModalAddPet';
import MediaQuery from 'react-responsive';
// import { useState } from 'react';
// import { getFavorites } from 'redux/notices/notices-operations';
// import { getUserNotices } from 'redux/notices/notices-operations';

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
  // const { categoryName } = useParams();
const isLoggedIn = useSelector(selectIsLoggedIn);
  // const [open1, setOpen1] = useState(false);
  // const error = useSelector(selectIsError);

  // const [matches, setMatches] = useState(
  //   window.matchMedia('(min-width: 768px)').matches
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getFavorites());
  //     dispatch(getUserNotices());
  //   }

  //   window
  //     .matchMedia('(min-width: 768px)')
  //     .addEventListener('change', e => setMatches(e.matches));
  // }, [dispatch, categoryName, isLoggedIn]);

  
//     const {open} = useToggle();

//   const openAddPet = () => {
//       if (isLoggedIn) {
//         open();
//       } else   
// setOpen1(true)
// }

  return (
    <>
      {/* {open1 && <ModalAddPet />} */}
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
                    <ButtonNav
                      to={'/notices/' + button.link}
                      name={button.link}
                    >
                      {button.btn}
                    </ButtonNav>
                  </ItemNav>
                ))}
          </WrapperNav>
          <MediaQuery minWidth={768}>
            <AddNoticePetButton />
          </MediaQuery>
     
    
          <MediaQuery maxWidth={767}>
            <AddPetButtonMobile />
          </MediaQuery>
    
        </ListNav>
      </NavStyle>
    </>
  );
};

export default NoticesCategoriesNav;
