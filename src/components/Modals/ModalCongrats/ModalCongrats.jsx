import Button from 'shared/components/Button/Button';
import { Title, Text, Container, PawIcon } from './ModalCongrats.styled';

import PropTypes from 'prop-types';

const ModalCongrats = ({ onClose }) => {

  return (
    <Container>
      <Title>Congrats!</Title>
      <Text>Your registration is success</Text>
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



