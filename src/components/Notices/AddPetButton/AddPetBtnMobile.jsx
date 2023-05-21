import {
  Text,
  AddBtn,
  IconAdd,
  Wrapper,
  AddPetButton,
} from './AddPetBtnMobile.style';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import plus from '../../../icons/plus.svg';

const AddPetButtonMobile = () => {
  // const isLogined = useSelector(selectIsLoggedIn);

  return (
    <>
      <Wrapper>
        <AddBtn>
          <AddPetButton to={'/add-pet'}></AddPetButton>
                  <IconAdd src={plus} alt="add-pet" />
                  <Text>Add pet</Text>
        </AddBtn>
      </Wrapper>
    </>
  );
};

export default AddPetButtonMobile;
