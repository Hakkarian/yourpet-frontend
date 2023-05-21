import { AddBtn } from './AddPetBtn.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selector';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';

import { ReactComponent as Add } from '../../../icons/plus.svg'
import { useNavigate } from 'react-router-dom';

const AddNoticePetButton = () => {
  const navigate = useNavigate();
  // const isLogined = useSelector(selectIsLoggedIn);
 
  return (
          <AddBtn onClick={() => navigate('/add-pet')}>Add pet
          <Add width='24' height='24' />
        </AddBtn>
  );
};

export default AddNoticePetButton;
