import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';

import {
  addNotices,
  getNoticeByCategory,
  getOneNotice,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  deleteUserNotice,
  createNotice,
  getUserNotices,
} from 'redux/notices/notices-operations';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import ModalNotice from '../../ModalNotice/ModalNotice';
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
   IconItem,
  Span,
} from './NoticesCategoryItem.styled';
import { ButtonTag } from 'shared/components/Button/button.styled';
import clock from '../../../icons/clock.svg';
import female from '../../../icons/female.svg';
import locationPet from '../../../icons/location-pet.svg';
import male from '../../../icons/male.svg';
import trash from '../../../icons/trash.svg';
import paw from '../../../icons/paw.svg';

const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'in-good-hands': 'in-good-hands',
};


const NoticesCategoryItem = ({ notice, isFavorite, isOwner, categoryPet }) => {
  const { photo, birthday, sex, location, title, id, category } = notice;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let query = null;

  const refreshingPage = category => {
    if (categoryPet === categoryShelf[category])
      dispatch(getNoticeByCategory({ category, query }));
    if (categoryPet === 'favorites-ads') {
      dispatch(getFavorites({ query }));
    }
    if (categoryPet === 'my-ads') {
      dispatch(getUserNotices({ query }));
    }
  };

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding pets to favorites.'
      );
    }
    dispatch(addToFavorites(id)).then(() => {
      refreshingPage(category);
    });

    toast.success('Pet added to favorites.');
  };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before removing pets from favorites.'
      );
    }
    dispatch(deleteFromFavorites(id)).then(() => {
      refreshingPage(categoryPet);
    });

    toast.success('Pet removed from favorites.');
  };

  const onChangeOpenModal = () => {
    dispatch(getOneNotice(id));
  };

    const toggleModal = () => {
      setIsModalOpen(prev => !prev);
    };

  return (
    <Item key={id}>
      <ImageWrapper>
        <Image src={photo} alt="Pet" loading="lazy" />
      </ImageWrapper>
      <CategoryName>{category}</CategoryName>

      {!isFavorite && (
        <SvgWrapper>
          <AddToFavoriteBtn onClick={addToFavorite} />
        </SvgWrapper>
      )}
      {isFavorite && (
        <SvgWrapper>
          <RemoveFromFavoriteBtn onClick={removeFromFavorite} />
        </SvgWrapper>
      )}

      <DescriptionWrapper>
        <DescriptionTextContainer>
          <IconItem src={locationPet} alt="location" width="24" height="24" />
          <DescriptionText>{location}</DescriptionText>
        </DescriptionTextContainer>
        <DescriptionTextContainer>
          <IconItem src={clock} alt="clock" width="24" height="24" />
          <DescriptionText>{birthday}</DescriptionText>
        </DescriptionTextContainer>
        <DescriptionTextContainer>
          {' '}
          <DescriptionText>{sex}</DescriptionText>
          {'female' && (
            <IconItem src={female} alt="sex" width="24" height="24" />
          )}
          {'male' && <IconItem src={male} alt="sex" width="24" height="24" />}
        </DescriptionTextContainer>

        <Title>{title}</Title>
      </DescriptionWrapper>

      <ButtonTag onClick={onChangeOpenModal}>
        <Span> Learn more </Span>
        <IconItem src={paw} alt="paw" width="24" height="24" />
      </ButtonTag>

      <ButtonDiv>
        <ModalNotice/>
        {/* {isLoggedIn ? (
          <>
            <ButtonsWrapper>
              <StyledButton onClick={onChangeOpenModal}>
                <ModalNotice
                  refreshingPage={() => {
                    refreshingPage(categoryPet);
                  }}
                />
              </StyledButton> */}
              {isOwner && (
                <>
                  <ButtonTag onClick={toggleModal}>
                    <IconItem src={trash} alt="trash" width="24" height="24" />
                  </ButtonTag>
                </>
              )}
            {/* </ButtonsWrapper>
          </>
        ) : (
          <StyledButton onClick={onChangeOpenModal}>
            <ModalNotice />
          </StyledButton> */}
      </ButtonDiv>
    </Item>
  );
};

export default NoticesCategoryItem;
