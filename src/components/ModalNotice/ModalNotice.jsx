import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { getNoticeById } from 'shared/services/notices-api';
import { getOneNotice } from 'redux/notices/notices-operations';

import {
  Backdrop,
  Wrapper,
  Container,
  Img,
  Title,
  List,
  Item,
  Text,
  BtnContainer,
} from './ModalNotice.styled';
// import CrossButton from 'shared/components/CrossButton/CrossButton';
// import { ReactComponent as CrossIcon } from '../../icons/cross-small.svg';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';

import CrossButton from 'shared/components/CrossButton/CrossButton';

import Button from 'shared/components/Button/Button';
import defaultImage from '../../images/default-user-img.jpg';
// import { getOneNotice } from 'redux/notices/notices-operations';
// import { selectOneNoticeMoreInfo } from 'redux/notices/notices-selector';

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({ onClose, children, title, sex, location}) => {

  // const dispatch = useDispatch();

  // const notice = useSelector(selectOneNoticeMoreInfo);
  // console.log(notice);
  
 
  // const [notice, setNotice] = useState(null);
  // const { id } = useParams();

  // useEffect(() => {
  //   getOneNotice().then(setNotice);
  // }, [id]);

  // const{ title, sex, location} = notice;
  // console.log(notice);

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

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <CrossButton type="button" onClick={onClose} />
        <div>
          <Container>
            <Img src={defaultImage} alt="User" />
            <div>
              <Title>Title:{title}</Title>
              <List>
                <Item>
                  <Text>Name:</Text>
                </Item>
                <Item>
                  <Text>Birthday:</Text>
                </Item>
                <Item>
                  <Text>Breed:</Text>
                </Item>
                <Item>
                  <Text>Place:{location}</Text>
                </Item>
                <Item>
                  <Text>The sex:{sex}</Text>
                </Item>
                <Item>
                  <Text>Email:</Text>
                </Item>
                <Item>
                  <Text>Phone:</Text>
                </Item>
              </List>
            </div>
          </Container>

          <Text>Coments:</Text>

          <BtnContainer>
            <Button className="btn" type="button" color="blue" width="129px">
              Add to <HeartIcon width="24px" height="24px" />
            </Button>
            <Button className="btn" type="button" color="white" width="129px">
              <a href="tel:+380961111111">Contacts</a>
            </Button>

            {/* <ContactsLink>Contacts</ContactsLink> */}
          </BtnContainer>
        </div>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default ModalNotice;
