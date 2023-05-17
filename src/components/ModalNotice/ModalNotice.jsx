import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getNoticeDetails } from 'shared/services/pets-api';

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

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({ onClose, children }) => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getNoticeDetails(id).then(setDetails);
  }, [id]);

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
              <Title>Title</Title>
              <List>
                <Item>
                  <Text>Name:{details.name}</Text>
                </Item>
                <Item>
                  <Text>Birthday:</Text>
                </Item>
                <Item>
                  <Text>Breed:</Text>
                </Item>
                <Item>
                  <Text>Place:</Text>
                </Item>
                <Item>
                  <Text>The sex:</Text>
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
