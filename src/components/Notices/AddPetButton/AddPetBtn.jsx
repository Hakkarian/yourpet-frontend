import { AddBtn } from './AddPetBtn.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
import { useToggle } from 'shared/hooks/useToggle';
import ModalAddPet from 'components/Modals/ModalAddPet';
import Modal from 'shared/components/Modal';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

import { ReactComponent as Add } from '../../../icons/plus.svg'
import { useNavigate } from 'react-router-dom';

const AddNoticePetButton = () => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useToggle();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLogined = useSelector(selectIsLoggedIn);
 
  return (
<>
{isLoggedIn ? (
  <AddBtn onClick={() => navigate('/add-pet')}>Add pet
  <Add width='24' height='24'/></AddBtn>
) : (<AddBtn type='button' onClick={open}>Add pet
<Add width='24' height='24'/></AddBtn>

)}
{isOpen && (<Modal onClose={close}><ModalAddPet onClose={close}/></Modal>)}
</>
  );
};

export default AddNoticePetButton;

