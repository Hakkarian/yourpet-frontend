import { AddPetButton } from './AddPetBtnMobile.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import ModalAddPet from 'components/Modals/ModalAddPet';
import { AddCss } from './AddPetBtn.styled';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPetButtonMobile = () => {
  // const isLogined = useSelector(selectIsLoggedIn);
  // const { open } = useToggle();
  // const [open1] = useState(false);
  const navigate = useNavigate();

  const { isOpen, open, close } = useToggle();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const location = useLocation();

  return (
    <>
{isLoggedIn ? (
  <AddPetButton onClick={() => navigate('/add-pet')}>
  <AddCss width='24' height='24'/>Add pet</AddPetButton>
) : (<AddPetButton type='button' onClick={open}>
<AddCss width='24' height='24'/>Add pet</AddPetButton>

)}
{isOpen && (<Modal onClose={close}><ModalAddPet onClose={close}/></Modal>)}

      {/* {open1 && <ModalAddPet />}
      <AddPetButton to={'/add-pet'} state={{ from: location }}>
        <AddCss width="24" height="24" />
        Add pet
      </AddPetButton> */}
    </>
  );
};

export default AddPetButtonMobile;
