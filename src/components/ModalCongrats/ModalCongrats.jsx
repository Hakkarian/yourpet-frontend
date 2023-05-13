import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// import CrossButton from 'shared/components/CrossButton/CrossButton';
import {
  Backdrop,
  Wrapper,
  GoToBtn,
  Title,
  Text,
  CloseModalBtn
} from './ModalCongrats.styled';
import { ReactComponent as Paw } from '../../icons/paw.svg';
import { ReactComponent as CrossSmall } from '../../icons/cross-small.svg';
// import plus from '../../icons/plus.svg';

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
      <CloseModalBtn type="button" onClick={onClose}>
      <CrossSmall />
    </CloseModalBtn>
        {/* <CrossButton onClick={onClose}/> */}
        <Title>Congrats!</Title>
        <Text>Youre registration is success</Text>
        <GoToBtn onClick={onClose}>
          Go to profile
          <Paw />
          {/* <ImgPaw src={paw} alt="paw" width="24" height="24" ></ImgPaw> */}
        </GoToBtn>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default ModalCongrats;
