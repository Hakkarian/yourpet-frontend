import React from 'react';

import { Wrap, UserDiv, Title, ModalTitle } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import { useToggle } from 'shared/hooks/useToggle';
import ModalCongrats from 'components/ModalCongrats';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();
  return (
    <UserDiv>
      <Title>My information:</Title>
      <Wrap>
        <UserData />
        <Logout onClick={open} />
        {isOpen && (
          <ModalCongrats onClose={close}>
            <ModalTitle>Already leaving?</ModalTitle>
          </ModalCongrats>
        )}
      </Wrap>
      <PetsData />
    </UserDiv>
  );
};

export default UserPage;
