import { Text, AddBtn, Wrapper, IconAdd, AddPetButton } from './AddPetBtn.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selector';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';

import plus from '../../../icons/plus.svg';

const AddNoticePetButton = () => {
  // const isLogined = useSelector(selectIsLoggedIn);

    
  return (
    <>
    
      <Wrapper>
          <AddBtn>
                  <AddPetButton to={'/add-pet'}></AddPetButton>
                  <Text>Add pet</Text>
          <IconAdd src={plus} alt="add-pet" />
        </AddBtn>
      </Wrapper>
    </>
  );
};

export default AddNoticePetButton;
