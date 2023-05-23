import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selector';
import { Wrap, UserDiv, Title } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import { changeIsPetAdded } from 'redux/pets/pets-slice';
import { info } from 'redux/auth/auth-operations';

// import ModalCongrats from 'components/Modals/ModalCongrats';
// import ModalLogOut from 'components/Modals/ModalLogOut';
import { getUserInfo } from 'redux/auth/auth-operations';
import ModalCongrats from 'components/Modals/ModalCongrats';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

 const user = useSelector(selectUser);
  const { userId } = user;


  useEffect(() => {
    const visitedBefore = localStorage.getItem(`visitedBefore_${userId}`);
    if (!visitedBefore) {
      setShowModal(true);
      localStorage.setItem(`visitedBefore_${userId}`, true)
    }
  }, [userId, setShowModal]);

  useEffect(() => {
    dispatch(changeIsPetAdded());
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleSubmit = async (value ) => {
    try {
      await dispatch(info(value));
  } catch (error) {
    console.log('Error updating user data:', error);
  }
};

  return (
    <>
      {showModal && <ModalCongrats setShowModal={setShowModal} />}
        <UserDiv>
          <div>
          <Title>My information:</Title>
          <Wrap>
            <UserData handleSubmit={handleSubmit}
            />
            <Logout onClick={open} />
            {isOpen && (
              <Modal onClose={close}>
                {/* <ModalLogOut onClose={close} /> */}
              </Modal>
            )}
          </Wrap>
          </div>
          <PetsData />
        </UserDiv>
    </>
  );
};

export default UserPage;
