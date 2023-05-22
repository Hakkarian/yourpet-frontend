import { TrashIcon, SvgWrapper } from './ButtonDelete.styled';
import Button from 'shared/components/Button/Button';
import Modal from "shared/components/Modal/Modal";
import ModalDelete from 'components/Modals/ModalDelete';

const ButtonDelete = () => {
    //state будее використаний  коли буде модалка
    const { isOpen, open, close } = useToggle();

    return (
 <SvgWrapper>
    <Button onClick={open} className="btn" type="button" color="blue" width="30" ><TrashIcon alt="trash" width="24" height="24"/></Button>
    {isOpen && <Modal onClose={close}><ModalDelete onClose={close}/></Modal>}
 </SvgWrapper>
    )
};

export default ButtonDelete;