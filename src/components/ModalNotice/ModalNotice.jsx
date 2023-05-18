import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
// import { getNoticeById } from 'shared/services/notices-api';
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
  ContainerList,
  Coments,
  ContainerDiv,
  ContainerImg,
} from './ModalNotice.styled';
// import CrossButton from 'shared/components/CrossButton/CrossButton';
// import { ReactComponent as CrossIcon } from '../../icons/cross-small.svg';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';

import CrossButton from 'shared/components/CrossButton/CrossButton';

import Button from 'shared/components/Button/Button';
import defaultImage from '../../images/default-user-img.jpg';
// import { getOneNotice } from 'redux/notices/notices-operations';
import { selectOneNoticeMoreInfo } from 'redux/notices/notices-selector';

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({ onClose, children, noticeDeteils, userDeteils }) => {
  
console.log(noticeDeteils)
console.log(userDeteils)
  // const dispatch = useDispatch();
//  console.log("helo")
  

  
 
  // const [notice, setNotice] = useState(null);
  // const { id } = useParams();
  // console.log(id)

  // useEffect(() => {
  //   dispatch(getOneNotice(id));

  //   // getOneNotice().then(setNotice);
  //  }, [id]);

  // const{ title, sex, location} = notice;
  // console.log(id);

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
        <Container>
         <ContainerImg>
         <Img src={noticeDeteils.photo} alt="User" />
            <ContainerList>
            <Title>Title:{noticeDeteils.title}</Title>
              <List>
                <Item>
                  <Text>Name:{noticeDeteils.name}</Text>
                </Item>
                <Item>
                  <Text>Birthday:{noticeDeteils.birthday}</Text>
                </Item>
                <Item>
                  <Text>Breed:{noticeDeteils.breed}</Text>
                </Item>
                <Item>
                  <Text>Place:{noticeDeteils.location}</Text>
                </Item>
                <Item>
                  <Text>The sex:{noticeDeteils.sex}</Text>
                </Item>
                <Item>
                  <Text>Email:{noticeDeteils.owner.email}</Text>
                </Item>
                <Item>
                  <Text>Phone:{noticeDeteils.owner.phone}</Text>
                </Item>
              </List>
            </ContainerList>
         </ContainerImg>
            
         <ContainerDiv>
         <Coments>Coments:{noticeDeteils.coments}</Coments>

<BtnContainer>
  <Button className="btn" type="button" color="blue" width="256px">
    Add to <HeartIcon width="24px" height="24px" />
  </Button>
  <Button className="btn" type="button" color="white" width="256px">
    <a href="tel:+380961111111">Contacts</a>
  </Button>

  {/* <ContactsLink>Contacts</ContactsLink> */}
</BtnContainer>
          </ContainerDiv>   
         
        </Container>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default ModalNotice;
