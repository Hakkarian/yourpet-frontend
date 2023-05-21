import React from 'react';
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

// import {
//   selectIsFavorite
// } from 'redux/notices/notices-selector';

import {
  Backdrop,
  Wrapper,
  Container,
  Title,
  BtnContainer,
  ContainerList,
  Coments,
  ContainerDiv,
  ContainerBox,
  Link,
  ColumTwo,
  ColumOne,
  CategoryBox,
  ImgBox,
} from './ModalNotice.styled';

import CrossButton from 'shared/components/CrossButton/CrossButton';

import { HeartIcon, FilledHeartIcon } from './ModalNotice.styled';

import Button from 'shared/components/Button/Button';

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({
  onClose,
  noticeDeteils,
  removeFromFavorite,
  addToFavorite,
  isFavorite,
}) => {
  const {
    photo,
    birthday,
    sex,
    location,
    title,
    owner: { phone, email },
    breed,
    name,
    category,
    comments,
  } = noticeDeteils;

  // let isFavorite = useSelector(selectIsFavorite);

  useEffect(() => {
    const handleKeyDowm = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDowm);

    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <CrossButton type="button" onClick={onClose} />
        <Container>
          <ContainerBox>
            <ImgBox>
              <img src={photo} alt={name} />
              <CategoryBox>
                <p>{category}</p>
              </CategoryBox>
            </ImgBox>

            <ContainerList>
              <Title>{title}</Title>
              <table>
                <tbody>
                  <tr>
                    <ColumOne>Name:</ColumOne>
                    <ColumTwo>{name}</ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>Birthday:</ColumOne>
                    <ColumTwo>{birthday}</ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>Breed:</ColumOne>
                    <ColumTwo>{breed}</ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>Place:</ColumOne>
                    <ColumTwo>{location}</ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>The sex:</ColumOne>
                    <ColumTwo>{sex}</ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>Email:</ColumOne>
                    <ColumTwo>
                      <Link href="mailto:{email}">{email}</Link>
                    </ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>Phone:</ColumOne>
                    <ColumTwo>
                      <Link href="tel:{phone}">{phone}</Link>
                    </ColumTwo>
                  </tr>
                </tbody>
              </table>
            </ContainerList>
          </ContainerBox>

          <ContainerDiv>
            <Coments>Comments:{comments}</Coments>

            <BtnContainer>
              {!isFavorite && (
                <Button
                  className="btn"
                  type="button"
                  color="blue"
                  width="256px"
                  onClick={addToFavorite}
                >
                  Add to <HeartIcon width="24" height="24" />
                </Button>
              )}
              {isFavorite && (
                <Button
                  className="btn"
                  type="button"
                  color="blue"
                  width="256px"
                  onClick={removeFromFavorite}
                >
                  Remove from <FilledHeartIcon width="24" height="24" />
                </Button>
              )}

              <Button className="btn" type="button" color="white" width="256px">
                <a href="tel:{noticeDeteils.owner.phone}">Contacts</a>
              </Button>
            </BtnContainer>
          </ContainerDiv>
        </Container>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

ModalNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  noticeDeteils: PropTypes.shape({
    category: PropTypes.string,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      phone: PropTypes.string,
      email: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.string.isRequired,
  }),
};

export default ModalNotice;
