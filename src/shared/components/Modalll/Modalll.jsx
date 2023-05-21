import { createPortal } from "react-dom";
import { useEffect } from "react";

import { BackdropDiv, ModalDiv } from "./modalll.styled";


const modalRoot = document.querySelector('#modal-root');
const Modal = (props) => {
    const { children, toggleModal, customStyles } = props;

    useEffect(() => {
    const hendleKeydown = (e) => {
        if (e.code === 'Escape') toggleModal();
    };
        window.addEventListener('keydown', hendleKeydown);
        document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', hendleKeydown);
      document.body.style.overflow = '';
    };
    },[toggleModal]);


    const hendleBackdropClick = e => {
        if (e.currentTarget === e.target) toggleModal();
    };

    return createPortal(
        <BackdropDiv onClick={hendleBackdropClick}>
            <ModalDiv customStyles={customStyles}>
                {children}
            </ModalDiv>
        </BackdropDiv>,
        modalRoot
    )
};
Modal.defaultProps = {
    customStyles: 'default',
};


export default Modal;