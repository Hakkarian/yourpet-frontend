import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Backdrop,
  Wrapper,
} from './Modal.styled';

// import CrossButton from 'shared/components/CrossButton/CrossButton';
// import { ReactComponent as CrossSmall } from '../../../icons/cross-small.svg';
import CrossButton from '../CrossButton/CrossButton';
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
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
      document.body.style.overflow = '';
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
        <CrossButton onClick={onClose}/>
      {/* <CloseModalBtn type="button" onClick={onClose}>
          <CrossSmall width="14px" height="14px"/>
        </CloseModalBtn> */}
        {children}    
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;