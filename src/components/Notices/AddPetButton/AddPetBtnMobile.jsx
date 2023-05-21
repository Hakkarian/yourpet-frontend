import {
  AddBtn,
} from './AddPetBtnMobile.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import ModalAddPet from 'components/Modals/ModalAddPet';
import { AddCss } from './AddPetBtn.styled';
import { useNavigate } from 'react-router-dom';

const AddPetButtonMobile = () => {
  const { isOpen, open, close } = useToggle();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate()

  return (
<>
{isLoggedIn ? (
  <AddBtn onClick={() => navigate('/add-pet')}>
  <AddCss width='24' height='24'/>Add pet</AddBtn>
) : (<AddBtn type='button' onClick={open}>
<AddCss width='24' height='24'/>Add pet</AddBtn>

)}
{isOpen && (<Modal onClose={close}><ModalAddPet onClose={close}/></Modal>)}
</>
  );
};

export default AddPetButtonMobile;

