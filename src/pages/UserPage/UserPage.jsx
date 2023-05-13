import React from 'react';

import { useState } from 'react';

import { UserDiv } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

import { ModalTitle } from './UserPage.styled';

const UserPage = () => {
  const [isShowModal, setIsShouModal] = useState(false);
  const shouModal = () => setIsShouModal(true);
  const closeModal = () => setIsShouModal(false);

  return (
    <UserDiv>
      <div>
        <UserData />
          <Logout onClick={shouModal} />
          {isShowModal && (
            <ModalApproveAction onClose={closeModal}>
              <ModalTitle>Already leaving?</ModalTitle>
            </ModalApproveAction>
          )}
      </div>
      <PetsData />
    </UserDiv>
  );
};

export default UserPage;
