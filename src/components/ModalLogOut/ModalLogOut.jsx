import { ContainerButton, ModalTitle } from './ModalLogOut.styled';
import Button from 'shared/components/Button/Button';
import {ReactComponent as LogOutIcon} from '../../icons/logout.svg';

const ModalLogOut = ({ onClose }) => {
  return (
    <div>
    <ModalTitle>Already leaving?</ModalTitle>
      <ContainerButton>
        <Button type="button" color="white" width="129px" onClick={onClose}>
          Cancel
        </Button>
        <Button type="button" color="blue" width="129px">
          Yes <LogOutIcon width="24px" height="24px" />
        </Button>
      </ContainerButton>
    </div>
  );
};

export default ModalLogOut;