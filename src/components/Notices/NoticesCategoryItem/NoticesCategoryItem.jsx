import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getNoticeByCategory,
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
  getUserNotices,
  deleteUserNotice,
} from 'redux/notices/notices-operations';

import { setNotices } from 'redux/notices/notices-slice';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import ModalNotice from '../../Modals/ModalNotice/ModalNotice';
import { useToggle } from 'shared/hooks/useToggle';

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
  CardContainer,
  IconItemPaw,
  DescriptionInner,
} from './NoticesCategoryItem.styled';
import Button from 'shared/components/Button/Button';
// import { ReactComponent as Clock } from '../../../icons/clock.svg';
import clock from '../../../icons/Icons/clock.svg';
import female from '../../../icons/Icons/female.svg';
import locationPet from '../../../icons/Icons/locationPet.svg';
import male from '../../../icons/Icons/male.svg';
import trash from '../../../icons/Icons/trash.svg';
import paw from '../../../icons/paw.svg';
import heart from '../../../icons/Icons/heart.svg';
import heartFill from '../../../icons/Icons/heartFill.svg';

const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'in-good-hands': 'in-good-hands',
};

const NoticesCategoryItem = ({
  notice,
  isFavorite,
  isOwner,
  categoryPet,
  user,
  onUpdateStatus
}) => {
  const { photo, birthday, sex, location, title, _id, category } = notice;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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

  const { isOpen, open, close, toggle } = useToggle();

  const refreshingPage = categoryPet => {
    if (categoryPet === categoryShelf[categoryPet])
      dispatch(getNoticeByCategory({ category, query }));
    if (categoryPet === 'favorites-ads') {
      dispatch(getFavorites({ query }));
    }
    if (categoryPet === 'my-ads') {
      dispatch(getUserNotices({ query }));
    }
  };

  const handleDeleteClick = () => {
    dispatch(deleteUserNotice(_id));
    dispatch(setNotices(_id));
    toggle();
  };

  const addToFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding pets to favorites.'
      );
    }
    dispatch(addToFavorites(_id)).then(() => {
      refreshingPage(categoryPet);
      onUpdateStatus()
    });

    toast.success('Pet added to favorites.');
   };

  const removeFromFavorite = async () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before removing pets from favorites.'
      );
    }
    dispatch(deleteFromFavorites(_id)).then(() => {
      refreshingPage(categoryPet);
      onUpdateStatus()
    });
    toast.success('Pet removed from favorites.');
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
                       <IconItem src={heart} alt="heart" width="24" height="24" />
              </AddToFavoriteBtn>
            </SvgWrapper>
          )}
          {isFavorite && (
            <SvgWrapper>
              {' '}
              <RemoveFromFavoriteBtn onClick={removeFromFavorite}>
                <IconItem src={heartFill} alt="heart" width="24" height="24" />
              </RemoveFromFavoriteBtn>
            </SvgWrapper>
          )}

          <DescriptionWrapper>
            <DescriptionTextContainer>
              <IconItem
                src={locationPet}
                alt="location"
                width="24"
                height="24"
              />
              <DescriptionText>{location}</DescriptionText>
            </DescriptionTextContainer>
            <DescriptionTextContainer>
                        <IconItem src={clock} alt="clock" width="24" height="24" />
              <DescriptionText>
                {age === 0 && 'less than 1 year'}
                {age === 1 && `${age} year`}
                {age !== 1 && age !== 0 && `${age} years`}
              </DescriptionText>
            </DescriptionTextContainer>
            <DescriptionTextContainer>
              {'female' ? (
                <IconItem src={female} alt="sex" width="24" height="24" />
              ) : (
                'male' && (
                  <IconItem src={male} alt="sex" width="24" height="24" />
                )
              )}{' '}
              <DescriptionText>{sex}</DescriptionText>
            </DescriptionTextContainer>
          </DescriptionWrapper>
        </CardContainer>
        <Title>{title}</Title>

        <Button type="button" onClick={open} width="248px">
          <Span> Learn more </Span>
          <IconItemPaw src={paw} alt="paw" width="24" height="24" />
        </Button>
      </DescriptionInner>

      <ButtonDiv>
        {isOpen && (
          <ModalNotice
            userDeteils={user}
            noticeDeteils={notice}
            onClose={close}
          />
        )}
        {isOwner && (
          <>
            <Button onClick={toggle} deleteNotice={handleDeleteClick}>
              <IconItem src={trash} alt="trash" width="24" height="24" />
            </Button>
          </>
        )}
      </ButtonDiv>
    </Item>
  );
};

export default NoticesCategoryItem;
