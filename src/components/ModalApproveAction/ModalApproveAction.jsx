import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Wrapper, CloseModalBtn, CancelBtn, YesBtn } from './ModalApproveAction.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({ onClose, children, shouModal }) => {
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
        <CloseModalBtn type='button' onClick={onClose}>x</CloseModalBtn>
        {children}
        <CancelBtn type='button' onClick={onClose}>Cancel</CancelBtn>
        <YesBtn type='button'>Yes</YesBtn>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
}

export default ModalApproveAction;