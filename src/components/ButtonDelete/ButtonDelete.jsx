import { TrashIcon, SvgWrapper } from './ButtonDelete.styled';
import Modal from 'shared/components/Modal/Modal';
import ModalDelete from 'components/Modals/ModalDelete';
import { useToggle } from 'shared/hooks/useToggle';
import PropTypes from 'prop-types';

const ButtonDelete = ({ onClick }) => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <SvgWrapper onClick={open} type="button">
        <TrashIcon alt="trash" width="24" height="24" />
      </SvgWrapper>
      {isOpen && (
        <Modal onClose={close}>
          <ModalDelete onClick={onClick} onClose={close} />
        </Modal>
      )}
    </>
  );
};

ButtonDelete.propTypes = {
   onClick: PropTypes.func.isRequired,
 };

export default ButtonDelete;
