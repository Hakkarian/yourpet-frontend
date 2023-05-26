import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserFirstLogin } from 'redux/auth/auth-selector';
import { Wrap, UserDiv, Title, Section } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
// import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import { changeIsPetAdded } from 'redux/pets/pets-slice';
import { info } from 'redux/auth/auth-operations';

// import ModalCongrats from 'components/Modals/ModalCongrats';
// import ModalLogOut from 'components/Modals/ModalLogOut';
import { getUserInfo, changeFirstLogin } from 'redux/auth/auth-operations';
import ModalCongrats from 'components/Modals/ModalCongrats';

const UserPage = () => {
  // const { isOpen, open, close } = useToggle();
  const dispatch = useDispatch();

  // const user = useSelector(selectUser);
  // const { userId } = user;
  const isFirstLogin = useSelector(selectUserFirstLogin);
  const [isModalOpen, setIsModalOpen] = useState(isFirstLogin);

  // useEffect(() => {
  //   const visitedBefore = localStorage.getItem(`visitedBefore_${userId}`);
  //   if (!visitedBefore) {
  //     open();
  //     localStorage.setItem(`visitedBefore_${userId}`, true);
  //   }
  // }, [userId, open]);

  useEffect(() => {
    dispatch(changeIsPetAdded());
    dispatch(getUserInfo());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUserInfo());
  // }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(changeFirstLogin());
  };
  const handleSubmit = async value => {
    try {
      await dispatch(info(value));
    } catch (error) {
      console.log('Error updating user data:', error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalCongrats onClose={closeModal} />
        </Modal>
      )}
      <Section>
        <UserDiv>
          <div>
            <Title>My information:</Title>
            <Wrap>
              <UserData handleSubmit={handleSubmit} />
              <Logout />
            </Wrap>
          </div>
          <PetsData />
        </UserDiv>
      </Section>
    </>
  );
};

export default UserPage;
