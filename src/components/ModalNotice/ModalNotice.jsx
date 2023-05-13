import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Wrapper, CloseModalBtn, ContactsLink } from './ModalNotice.styled';
import BlueButton from 'shared/components/BlueButton/BlueButton';

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({ onClose, children }) => {
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
        <CloseModalBtn type='button' onClick={onClose}>
          x
        </CloseModalBtn>
        <div>
            <div>foto</div>
            <div>
                <h2>Title</h2>
                <ul>
                    <li>
                        <p>Name:</p>
                    </li>
                    <li>
                        <p>Birthday:</p>
                    </li>
                    <li>
                        <p>Breed:</p>
                    </li>
                    <li>
                        <p>Place:</p>
                    </li>
                    <li>
                        <p>The sex:</p>
                    </li>
                    <li>
                        <p>Email:</p>
                    </li>
                    <li>
                        <p>Phone:</p>
                    </li>
                </ul>
                <p>Coments:</p>

                {/* <AddToBtn type='button'>Add to</AddToBtn> */}
                <BlueButton>Add to</BlueButton>
                <ContactsLink>Contacts</ContactsLink>

            </div>
        </div>
       
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
}

export default ModalNotice;