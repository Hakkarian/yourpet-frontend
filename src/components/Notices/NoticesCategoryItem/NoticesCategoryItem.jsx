import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { categoryShelf } from '../NoticesCategoryList/NoticesCategoryList';
import {
  getNoticeByCategory,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  getUserNotices,
  deleteUserNotice,
} from 'redux/notices/notices-operations';

// import { setNotices } from 'redux/notices/notices-slice';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import {
  selectAllFavoritePets,
  selectAllOwnPets,
} from 'redux/notices/notices-selector';
import ModalNotice from '../../Modals/ModalNotice/ModalNotice';
import { useToggle } from 'shared/hooks/useToggle';
// import { Tooltip, IconButton } from '@mui/material';

import {
  Item,
  ImageWrapper,
  Image,
  CategoryName,
  DescriptionWrapper,
  Title,
  DescriptionTextContainer,
  DescriptionText,
  AddToFavoriteBtn,
  RemoveFromFavoriteBtn,
  // ButtonDiv,
  SvgWrapper,
  Span,
  CardContainer,
  DescriptionInner,
  ModalCss,
  // RemoveFromOwnBtn,
} from './NoticesCategoryItem.styled';
import Button from 'shared/components/Button/Button';
import { ReactComponent as FemaleIcon } from 'icons/female.svg';
import { ReactComponent as MaleIcon } from 'icons/male.svg';
import { ReactComponent as ClockIcon } from 'icons/clock.svg';
import { ReactComponent as LocationIcon } from 'icons/location-pet.svg';
import { HeartIcon } from './NoticesCategoryItem.styled';
import { FilledHeartIcon } from './NoticesCategoryItem.styled';
// import { TrashIcon } from './NoticesCategoryItem.styled';
import angryDog from '../../../images/angry-dog.png';
// import { useState } from 'react';

import ButtonDelete from 'components/ButtonDelete/ButtonDelete';
import { ButtonRegister, ContainerButton, PawIcon } from 'components/Modals/ModalAddPet/ModalAddPet.styled';
import { useState } from 'react';
// import Modal from 'shared/components/Modal';
// import { ButtonRegister, ContainerButton, PawIcon } from 'components/Modals/ModalAddPet/ModalAddPet.styled';

// import { selectUserNotices } from 'redux/notices/notices-selector';
// import { selectIsFavorite } from 'redux/notices/notices-selector';

const NoticesCategoryItem = ({
  notice,
  categoryPet,
  page,
  search,
  user,
  id,
}) => {
  const { photo, birthday, sex, location, title, _id, category } = notice;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const listOfFavorites = useSelector(selectAllFavoritePets);
  const allOwnPets = useSelector(selectAllOwnPets);

  const isFavorite = listOfFavorites.find(pet => pet._id === id);
  const isOwnPet = allOwnPets.find(pet => pet._id === id);

  const getAge = utcDate => {
    const date = new Date(utcDate);
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();
    const convertedDate = [day, month, year].join('.');
    return convertedDate;
  };
  getAge(birthday);
  const difOfAge = dateOfBirth => {
    return Math.trunc(
      (new Date().getTime() - new Date(birthday)) / (24 * 3600 * 365.25 * 1000)
    );
  };

  const age = difOfAge(birthday);

  const { isOpen, open, close } = useToggle();
  const [open1, setOpen1] = useState(false);

  const refreshingPage = () => {
    if (categoryPet === categoryShelf[categoryPet]) {
      dispatch(getNoticeByCategory({ category, search, page }));
    }
    if (categoryPet === 'favorites-ads') {
      dispatch(getFavorites({ search, page }));
    }
    if (categoryPet === 'my-ads') {
      dispatch(getUserNotices({ search, page }));
    }
  };

  const handleDeleteClick = async () => {
    dispatch(deleteUserNotice(_id)).then(() => {
      refreshingPage();
    });
  };

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      // toast('To add to favorites you need to register first.', {
      //   icon: '❕',
      //   style: {
      //     borderRadius: '10px',
      //     background: 'red',
      //     color: '#fff',
      //   },
      // });
      setOpen1(true);
      return;
    }
    dispatch(addToFavorites(_id));
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before removing pets from favorites.'
      );
    }
    dispatch(deleteFromFavorites(_id)).then(() => {
      if (categoryPet === 'favorites-ads') {
        dispatch(getFavorites({ page, search }));
      }
    });
  };

  return (
    <>
      {open1 && (
        <ModalCss onClose={() => setOpen1(false)}>
          To add to favorite, you need to register
          <img src={angryDog} alt="not allowed" width="200" height="200" />
          <ContainerButton>
            <ButtonRegister to={'/register'}>
              Register <PawIcon />
            </ButtonRegister>
          </ContainerButton>
        </ModalCss>
      )}
      <Item key={_id}>
        <DescriptionInner>
          <CardContainer>
            <ImageWrapper>
              <Image src={photo} alt="Pet" loading="lazy" />
            </ImageWrapper>
            {category === 'for-free' ? (
              <CategoryName>in good hands</CategoryName>
            ) : (
              <CategoryName>{category}</CategoryName>
            )}

            {!isFavorite && (
              <SvgWrapper>
                <AddToFavoriteBtn onClick={addToFavorite}>
                  <HeartIcon alt="heart" width="24" height="24" />
                </AddToFavoriteBtn>
              </SvgWrapper>
            )}
            {isFavorite && (
              <SvgWrapper>
                <RemoveFromFavoriteBtn onClick={removeFromFavorite}>
                  <FilledHeartIcon alt="heart" width="24" height="24" />
                </RemoveFromFavoriteBtn>
              </SvgWrapper>
            )}
            {isOwnPet && (
              // <RemoveFromOwnBtn onClick={handleDeleteClick}>
              //   <TrashIcon alt="trash" width="24" height="24" />
              // </RemoveFromOwnBtn>
              <ButtonDelete onClick={handleDeleteClick}></ButtonDelete>
            )}
            {/* {isOpen && (<Modal onClose={close}><ModalDelete onClick={handleDeleteClick} onClose={close}/></Modal>)} */}
            <DescriptionWrapper>
              <DescriptionTextContainer>
                <LocationIcon alt="location" width="24" height="24" />
                <DescriptionText data-tooltip={location}>
                  {location}
                </DescriptionText>
              </DescriptionTextContainer>

              <DescriptionTextContainer>
                <ClockIcon alt="clock" width="24" height="24" />
                <DescriptionText>
                  {age === 0 && '\u2248 1 year'}
                  {age === 1 && `${age} year`}
                  {age !== 1 && age !== 0 && `${age} years`}
                </DescriptionText>
              </DescriptionTextContainer>
              <DescriptionTextContainer>
                {sex.toLowerCase() === 'female' && (
                  <FemaleIcon alt="sex" width="24" height="24" />
                )}
                {sex.toLowerCase() === 'male' && (
                  <MaleIcon alt="sex" width="24" height="24" />
                )}
                <DescriptionText>{sex}</DescriptionText>
              </DescriptionTextContainer>
            </DescriptionWrapper>
          </CardContainer>
          <Title>{title}</Title>

          <Button type="button" onClick={open} width="248px">
            <Span> Learn more </Span>
          </Button>
        </DescriptionInner>

        {/* <ButtonDiv> */}
        {isOpen && (
          <ModalNotice
            userDeteils={user}
            noticeDeteils={notice}
            onClose={close}
            isFavorite={isFavorite}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
          />
        )}
        {/* </ButtonDiv> */}
      </Item>
    </>
  );
};

export default NoticesCategoryItem;
