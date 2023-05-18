import React from 'react';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
// import { toast } from 'react-toastify';
// import {
//   addToFavorites,
//   deleteFromFavorites,
// } from 'redux/notices/notices-operations';

// import { selectIsLoggedIn } from 'redux/auth/auth-selector';

import {
  Backdrop,
  Wrapper,
  Container,
  Img,
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

import { ReactComponent as HeartIcon } from '../../icons/heart.svg';

import CrossButton from 'shared/components/CrossButton/CrossButton';

import Button from 'shared/components/Button/Button';

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({ onClose, noticeDeteils }) => {
  console.log(noticeDeteils);
  const { photo, birthday, sex, location, title, owner, breed, name, category } = noticeDeteils;


  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleKeyDowm = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDowm);
    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  // const addToFavorite = async () => {
  //   if (!isLoggedIn) {
  //     return toast.error(
  //       'You need to authorize before adding pets to favorites.'
  //     );
  //   }
  //   dispatch(addToFavorites(id)).then(() => {
  //     refreshingPage(category);
  //   });

  //   toast.success('Pet added to favorites.');
  // };

  // const removeFromFavorite = async () => {
  //   if (!isLoggedIn) {
  //     return toast.error(
  //       'You need to authorize before removing pets from favorites.'
  //     );
  //   }
  //   dispatch(deleteFromFavorites(id)).then(() => {
  //     refreshingPage(categoryPet);
  //   });

  //   toast.success('Pet removed from favorites.');
  // };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <CrossButton type="button" onClick={onClose} />
        <Container>
          <ContainerBox>
<ImgBox>
<Img src={photo} alt="pet photo" />
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
                      <Link>{owner.email}</Link>
                    </ColumTwo>
                  </tr>
                  <tr>
                    <ColumOne>Phone:</ColumOne>
                    <ColumTwo>
                      <Link href="tel:{owner.phone}">{owner.phone}</Link>
                    </ColumTwo>
                  </tr>
                </tbody>
              </table>
            </ContainerList>
          </ContainerBox>

          <ContainerDiv>
            <Coments>Coments:{noticeDeteils.coments}</Coments>

            <BtnContainer>
              
              <Button className="btn" type="button" color="blue" width="256px">
                Add to <HeartIcon width="24px" height="24px" />
              </Button>
              
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

export default ModalNotice;
