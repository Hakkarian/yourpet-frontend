import React from 'react';

// import { useState } from 'react';

import { useToggle } from 'hooks/useToggle';

import { UserDiv } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

import { ModalTitle } from './UserPage.styled';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <UserDiv>
      <div>
        <UserData />
          <Logout onClick={open} />
          {isOpen && (
            <ModalApproveAction onClose={close}>
              <ModalTitle>Already leaving?</ModalTitle>
            </ModalApproveAction>
          )}
      </div>
      <PetsData />
    </UserDiv>
  );
};

export default UserPage;
