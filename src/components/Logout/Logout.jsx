
import {OutBtn, OutWrap, OutText, Icon} from './Logout.styled';
import ModalLogOut from "components/Modals/ModalLogOut";
import Modal from "shared/components/Modal/Modal";
import { useToggle } from "shared/hooks/useToggle";


const Logout = () => {
    const { isOpen, open, close } = useToggle();

  

    return (
        <OutWrap>
            <OutBtn type="button" onClick={open}>
            <OutText>Log Out</OutText>
            <Icon/>
            </OutBtn>
            {isOpen && <Modal onClose={close}>
            <ModalLogOut onClose={close}/>
            </Modal>}
        </OutWrap>

    )
}
export default Logout;
