import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selector';
import { Container } from 'shared/components/Container/Container.styled';
import { Wrap, UserDiv, Title } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import { changeIsPetAdded } from 'redux/pets/pets-slice';
import ModalCongrats from 'components/Modals/ModalCongrats';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { userId } = user;
  const { name, birthday, email, phone, city } = user;

  useEffect(() => {
    const visitedBefore = localStorage.getItem(`visitedBefore_${userId}`);
    if (!visitedBefore) {
      // setShowModal(true);
      open();
      localStorage.setItem(`visitedBefore_${userId}`, true);
    }
  }, [userId, open]);

  useEffect(() => {
    dispatch(changeIsPetAdded());
  }, [dispatch]);
  
  return (
  <>
    {/* { showModal && (<ModalCongrats setShowModal={setShowModal} />)} */}
    {isOpen && <Modal onClose={close}>
            <ModalCongrats onClose={close}/>
            </Modal>}
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
        <Logout/>
      </Wrap>
      <PetsData />
    </UserDiv>
      </Container>
    </>
  );
};

export default UserPage;
