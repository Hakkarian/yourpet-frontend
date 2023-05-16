import React from 'react';

import { Wrap, UserDiv, Title} from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal'
import ModalLogOut from 'components/ModalLogOut';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();
  return (
    <UserDiv>
      <Title>My information:</Title>
      <Wrap>
        <UserData />
        <Logout onClick={open} />
        {isOpen && (
          <Modal onClose={close}>
            <ModalLogOut onClose={close}/>
          </Modal>
        )}
      </Wrap>
      <PetsData />
    </UserDiv>
  );
};

export default UserPage;
