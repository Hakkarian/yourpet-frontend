import {
  Text,
  AddBtn,
  Wrapper,
  IconAdd,
  AddPetButton,
} from './AddPetBtn.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useToggle } from 'shared/hooks/useToggle';
// import { toast } from 'react-hot-toast';
import ModalAddPet from 'components/Modals/ModalAddPet';

const AddNoticePetButton = () => {
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
          <Text>Add pet</Text>
          <IconAdd id="plus" alt="add-pet" />
        </AddBtn>
      </Wrapper>
    </>
  );
};

export default AddNoticePetButton;
