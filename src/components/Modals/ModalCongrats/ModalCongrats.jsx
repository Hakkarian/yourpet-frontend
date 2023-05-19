import Button from 'shared/components/Button/Button';
import { Title, Text, Container } from './ModalCongrats.styled';
import { ReactComponent as Paw } from '../../../icons/paw.svg';
import PropTypes from 'prop-types';

const ModalCongrats = ({ onClose }) => {

  return (
    <Container>
      <Title>Congrats!</Title>
      <Text>Youre registration is success</Text>
      <Button onClick={onClose} className="btn" type="button" color="blue" width="248px">
        Go to profile <Paw stroke="#FFFFFF" fill="none" width="24px" height="24px" />
      </Button>
    </Container>
  );
};

ModalCongrats.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalCongrats;



