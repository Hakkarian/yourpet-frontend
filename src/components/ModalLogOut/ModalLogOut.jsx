import { ContainerButton, ModalTitle } from './ModalLogOut.styled';
import Button from 'shared/components/Button/Button';
import {ReactComponent as LogOutIcon} from '../../icons/logout.svg';


const ModalLogOut = ({ onClose }) => {
  return (
    <div>
    <ModalTitle>Already leaving?</ModalTitle>
      <ContainerButton>
        <Button className="btn" type="button" color="white" width="129px" onClick={onClose}>
          Cancel
        </Button>
        <Button className="btn" type="button" color="blue" width="129px">
          Yes <LogOutIcon stroke="#FFFFFF" className="svg" width="24px" height="24px" />
        </Button>
      </ContainerButton>
    </div>
  );
};

export default ModalLogOut;