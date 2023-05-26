import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selector';
import { Wrap, UserDiv, Title, Section } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import { useToggle } from 'shared/hooks/useToggle';
// ________
import { useAuth } from 'shared/hooks/useAuth';
import { statusIsRegister} from 'redux/auth/auth-slice'
// ________
import Modal from 'shared/components/Modal';
import { changeIsPetAdded } from 'redux/pets/pets-slice';
import { info } from 'redux/auth/auth-operations';
import { getUserInfo } from 'redux/auth/auth-operations';
import ModalCongrats from 'components/Modals/ModalCongrats';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();
  const dispatch = useDispatch();
  // _____
const { isRegisteredIn } = useAuth();
  // _____

  const user = useSelector(selectUser);
  const { userId } = user;

  // useEffect(() => {
  //   const visitedBefore = localStorage.getItem(`visitedBefore_${userId}`);
  //   if (!visitedBefore) {
  //     open();
  //     localStorage.setItem(`visitedBefore_${userId}`, true);
  //   }
  // }, [userId, open]);

  // _______
  useEffect(() => {
    if (isRegisteredIn) {
      open(isRegisteredIn);
      dispatch(statusIsRegister(false));
    }
  }, [isRegisteredIn, dispatch]);
  // _______

  useEffect(() => {
    dispatch(changeIsPetAdded());
    dispatch(getUserInfo());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUserInfo());
  // }, [dispatch]);

  const handleSubmit = async value => {
    try {
      await dispatch(info(value));
    } catch (error) {
      console.log('Error updating user data:', error);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={close}>
          <ModalCongrats onClose={close} />
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
