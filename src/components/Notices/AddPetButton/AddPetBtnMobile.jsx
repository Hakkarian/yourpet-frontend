import { AddBtn } from './AddPetBtnMobile.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useToggle } from 'shared/hooks/useToggle';
import Modal from 'shared/components/Modal';
import ModalAddPet from 'components/Modals/ModalAddPet';
import { AddCss } from './AddPetBtn.styled';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AddPetButtonMobile = () => {
  const isLogined = useSelector(selectIsLoggedIn);
  // const { open } = useToggle();
  const [open1, setOpen1] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
      {open1 && <ModalAddPet />}
      <AddBtn onClick={openAddPet} state={{ from: location }}>
        <AddCss width="24" height="24" />
        Add pet
      </AddBtn>
    </>
  );
};

export default AddPetButtonMobile;

