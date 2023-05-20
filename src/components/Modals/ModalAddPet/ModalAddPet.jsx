import { ContainerButton, ModalTitle, Container  } from './ModalAddPet.styled';
import Button from 'shared/components/Button/Button';
import {ReactComponent as PlusIcon} from '../../../icons/plus.svg';
import PropTypes from 'prop-types';

const ModalAddPet = ({ onClose, onClick }) => {
  return (
    <Container>
       <ModalTitle>To add a pet, you need to register</ModalTitle>
      <ContainerButton>
        <Button className="btn" type="button" color="white" width="256px" onClick={onClose}>
          Cancel
        </Button>
        <Button className="btn" type="button" onClick={onClick} color="blue" width="256px">
          Add pet <PlusIcon className="svg" stroke="white" width="24px" height="24px" />
        </Button>
      </ContainerButton>
    </Container>
  );
};

ModalAddPet.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalAddPet;





