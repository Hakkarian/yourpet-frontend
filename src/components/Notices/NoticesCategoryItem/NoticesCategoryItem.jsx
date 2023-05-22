import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  getNoticeByCategory,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  getUserNotices,
  // deleteUserNotice,
} from 'redux/notices/notices-operations';
import { useMemo } from 'react';

// import { setNotices } from 'redux/notices/notices-slice';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
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
  ButtonDiv,
  SvgWrapper,
  Span,
  CardContainer,
  DescriptionInner,
} from './NoticesCategoryItem.styled';
import Button from 'shared/components/Button/Button';
import { ReactComponent as FemaleIcon } from 'icons/female.svg';
import { ReactComponent as MaleIcon } from 'icons/male.svg';
import { ReactComponent as ClockIcon } from 'icons/clock.svg';
import { ReactComponent as LocationIcon } from 'icons/location-pet.svg';
import { HeartIcon } from './NoticesCategoryItem.styled';
import { FilledHeartIcon } from './NoticesCategoryItem.styled';
// import { TrashIcon } from './NoticesCategoryItem.styled';
// import { selectUserNotices } from 'redux/notices/notices-selector';
// import { selectIsFavorite } from 'redux/notices/notices-selector';

const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'in-good-hands': 'in-good-hands',
};

const NoticesCategoryItem = ({
  notice,
  isOwner,
  categoryPet,
  user,
  listOfFavorites = [],
  id,
}) => {
  const { photo, birthday, sex, location, title, _id, category } = notice;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isFavorite = useMemo(() => {
    return listOfFavorites.find(pet => pet._id === id);
  }, [id, listOfFavorites]);

  let query = null;

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

  const refreshingPage = categoryPet => {
    if (categoryPet === categoryShelf[categoryPet])
      dispatch(getNoticeByCategory({ category, query }));
    dispatch(getFavorites({ query }));
    if (categoryPet === 'favorites-ads') {
      dispatch(getFavorites({ query }));
    }
    if (categoryPet === 'my-ads') {
      dispatch(getUserNotices({ query }));
      dispatch(getFavorites({ query }));
    }
  };

  // const handleDeleteClick = () => {
  //   dispatch(deleteUserNotice(_id));
  //   dispatch(setNotices(_id));
  //   toggle();
  // };

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      // toast.error('You need to authorize before adding pets to favorites.');
      toast('You need to authorize before adding pets to favorites.', {
        icon: '❕',
        style: {
          borderRadius: '10px',
          background: '#B70404',
          color: '#fff',
        },
      });
      return;
    }
    dispatch(addToFavorites(_id)).then(() => {
      refreshingPage(categoryPet);
      // onUpdateStatus();
    });
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before removing pets from favorites.'
      );
    }
    dispatch(deleteFromFavorites(_id)).then(() => {
      refreshingPage(categoryPet);
      // onUpdateStatus();
    });
  };

  return (
    <Item key={_id}>
      <DescriptionInner>
        <CardContainer>
          <ImageWrapper>
            <Image src={photo} alt="Pet" loading="lazy" />
          </ImageWrapper>
          <CategoryName>{category}</CategoryName>
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

      <ButtonDiv>
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
        {/* {isOwner === isOwnerNotices && (
            <Button onClick={open} deleteNotice={handleDeleteClick}>
              <TrashIcon alt="trash" width="24" height="24" />
            </Button>
        )} */}
      </ButtonDiv>
    </Item>
  );
};

export default NoticesCategoryItem;
