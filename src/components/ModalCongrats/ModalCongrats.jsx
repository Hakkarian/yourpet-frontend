import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Wrapper, CloseModalBtn, GoToBtn, Title, Text } from './ModalCongrats.styled';


const modalRoot = document.querySelector('#modal-root');

const ModalCongrats = ({ onClose, children, shouModal }) => {
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
        <Title>Congrats!</Title>
        <Text>Youre registration is success</Text>
        <GoToBtn onClick={onClose}>Go to profile</GoToBtn>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
}

export default ModalCongrats;