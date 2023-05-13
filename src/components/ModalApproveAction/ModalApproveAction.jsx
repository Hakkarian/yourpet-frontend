import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  Wrapper,
  CloseModalBtn,
  CancelBtn,
} from './ModalApproveAction.styled';
import BlueButton from 'shared/components/BlueButton/BlueButton';
// import CrossButton from 'shared/components/CrossButton/CrossButton';
import { ReactComponent as CrossSmall } from '../../icons/cross-small.svg';

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
        <CloseModalBtn type="button" onClick={onClose}>
          <CrossSmall />
        </CloseModalBtn>
        {/* <CrossButton type='button' onClick={onClose}/> */}

        {children}
        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
        <BlueButton type="button">Yes</BlueButton>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default ModalApproveAction;
