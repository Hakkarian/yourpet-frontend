import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selector';
import { Container } from 'shared/components/Container/Container.styled';
import { Wrap, UserDiv, Title} from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal'
import ModalLogOut from 'components/ModalLogOut';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();

  const user = useSelector(selectUser);
  const { name, birthday, email, phone, city } = user;
  
  return (
    <Container>
    <UserDiv>
      <Title>My information:</Title>
      <Wrap>
        <UserData 
           name={name}
           birthday={birthday}
           email={email}
           phone={phone}
           city={city}/>
        <Logout onClick={open} />
        {isOpen && (
          <Modal onClose={close}>
            <ModalLogOut onClose={close}/>
          </Modal>
        )}
      </Wrap>
      <PetsData />
    </UserDiv>
    </Container>
  );
};

export default UserPage;
