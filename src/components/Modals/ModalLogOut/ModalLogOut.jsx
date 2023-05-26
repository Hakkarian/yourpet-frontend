import {
  ContainerButton,
  ModalTitle,
  Container,
  LogOutIcon,
} from '../Modal.styled';
import Button from 'shared/components/Button/Button';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

const ModalLogOut = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logout());

  return (
    <Container>
      <ModalTitle>Already leaving?</ModalTitle>
      <ContainerButton>
        <Button
          onClick={handleLogOut}
          className="btn"
          type="button"
          color="blue"
          width="256px"
        >
          Yes <LogOutIcon width="24px" height="24px" />
        </Button>
        <Button
          className="btn"
          type="button"
          color="white"
          width="256px"
          onClick={onClose}
        >
          Cancel
        </Button>
      </ContainerButton>
    </Container>
  );
};

ModalLogOut.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalLogOut;
