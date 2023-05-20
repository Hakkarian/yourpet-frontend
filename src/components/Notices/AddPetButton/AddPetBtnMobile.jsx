import {
  Text,
  AddBtn,
  IconAdd,
  Wrapper,
  AddPetButton,
} from './AddPetBtnMobile.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useState } from 'react';
import { useToggle } from 'shared/hooks/useToggle';
import ModalAddPet from 'components/Modals/ModalAddPet';
import plus from '../../../icons/plus.svg';

const AddPetButtonMobile = () => {
  const isLogined = useSelector(selectIsLoggedIn);
  const { open } = useToggle();
  const [open1, setOpen1] = useState(false);

  const openAddPet = () => {
    if (isLogined) {
      open();
    } else setOpen1(true);
  };

  return (
    <>
      {open1 && <ModalAddPet />}
      <Wrapper>
        <AddBtn onClick={openAddPet}>
          <AddPetButton to={'/add-pet'}></AddPetButton>
                  <IconAdd src={plus} alt="add-pet" />
                  <Text>Add pet</Text>
        </AddBtn>
      </Wrapper>
    </>
  );
};

export default AddPetButtonMobile;
