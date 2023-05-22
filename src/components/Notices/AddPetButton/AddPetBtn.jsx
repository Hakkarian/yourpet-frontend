import { AddPetButton } from './AddPetBtn.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import ModalAddPet from 'components/Modals/ModalAddPet';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Add } from '../../../icons/plus.svg';
import { useNavigate } from 'react-router-dom';

const AddNoticePetButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, open, close } = useToggle();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLogined = useSelector(selectIsLoggedIn);

  return (
    <>
    {isLoggedIn ? (
//   <AddPetButton onClick={() => navigate('/add-pet')}>Add pet
//   <Add width='24' height='24'/></AddPetButton>
// ) : (<AddPetButton type='button' onClick={open}>Add pet
// <Add width='24' height='24'/></AddPetButton>

// )}
// {isOpen && (<Modal onClose={close}><ModalAddPet onClose={close}/></Modal>)}
<AddPetButton state={{ from: location }} to={'/add-pet'}>Add pet
<Add width='24' height='24'/></AddPetButton>
) : (<AddPetButton type='button' onClick={open}>Add pet
<Add width='24' height='24'/></AddPetButton>
)}
{isOpen && (<Modal onClose={close}><ModalAddPet onClose={close}/></Modal>)}
    </>
    
    // <AddPetButton state={{ from: location }} to={'/add-pet'}>
    //   Add pet
    //   <Add width="24" height="24" />
    // </AddPetButton>
    // <AddBtn onClick={() => navigate('/add-pet')} state={{ from: location }}>
    //   Add pet
    //   <Add width="24" height="24" />
    // </AddBtn>
    
  );
};

export default AddNoticePetButton;
