import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  Wrapper,
  CloseModalBtn,

} from './Modal.styled';

// import CrossButton from 'shared/components/CrossButton/CrossButton';
import { ReactComponent as CrossSmall } from '../../../icons/cross-small.svg';
// import Button from 'shared/components/Button/Button';
// import {ReactComponent as DeleteIcon} from '../../icons/trash.svg';
// import { ReactComponent as LogoutSvg} from '../../icons/logout.svg';
// import { ReactComponent as Trash} from '../../icons/trash.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children, shouModal }) => {
  useEffect(() => {
    const handleKeyDowm = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDowm);
    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
      <CloseModalBtn type="button" onClick={onClose}>
          <CrossSmall />
        </CloseModalBtn>
        {children}    
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;