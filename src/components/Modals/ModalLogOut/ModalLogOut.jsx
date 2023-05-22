import { ContainerButton, ModalTitle} from './ModalLogOut.styled';
import { Container } from 'shared/components/Modal/ContainerModal/ContainerModal.styled';
import Button from 'shared/components/Button/Button';
import {ReactComponent as LogOutIcon} from '../../../icons/logout.svg';
import PropTypes from 'prop-types';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
// import Container from 'shared/components/Modal/ContainerModal/ContainerModal';


const ModalLogOut = ({ onClose}) => {
  const dispatch = useDispatch();
    const handleLogOut = () => dispatch(logout());

  return (
    <Container>
    <ModalTitle>Already leaving?</ModalTitle>
      <ContainerButton>
        <Button className="btn" type="button" color="white" width="256px" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleLogOut} className="btn" type="button" color="blue" width="256px">
          Yes <LogOutIcon stroke="#FFFFFF" fill="none" className="svg" width="24px" height="24px" />
        </Button>
      </ContainerButton>
    </Container>
  );
};

ModalLogOut.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalLogOut;