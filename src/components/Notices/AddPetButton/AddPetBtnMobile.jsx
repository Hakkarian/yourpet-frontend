import { AddBtn } from './AddPetBtnMobile.style';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selector';
// import { useToggle } from 'shared/hooks/useToggle';
// import Modal from 'shared/components/Modal';
import ModalAddPet from 'components/Modals/ModalAddPet';
import { AddCss } from './AddPetBtn.styled';
// import { useNavigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddPetButtonMobile = () => {
  // const isLogined = useSelector(selectIsLoggedIn);
  // const { open } = useToggle();
  const [open1] = useState(false);
  // const navigate = useNavigate();
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <>
      {open1 && <ModalAddPet />}
      <AddBtn onClick={() => navigate('/add-pet')} state={{ from: location }}>
        <AddCss width="24" height="24" />
        Add pet
      </AddBtn>
    </>
  );
};

export default AddPetButtonMobile;

