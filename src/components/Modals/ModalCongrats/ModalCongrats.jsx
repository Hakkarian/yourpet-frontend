import Button from 'shared/components/Button/Button';
import { Title, Text, Container, PawIcon } from './ModalCongrats.styled';
import kotik from '../../../images/kotik.png'
import PropTypes from 'prop-types';

const ModalCongrats = ({ onClose }) => {

  return (
    <Container>
      <Title>Congrats!</Title>
      <Text>Your registration is success</Text>
      <img className="img" src={kotik} alt="allowed" width='120' height='150'></img>
      <Button onClick={onClose} className="btn" type="button" color="blue" width="248px">
        Go to profile <PawIcon/>
      </Button>
    </Container>
  );
};

ModalCongrats.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalCongrats;



