import Button from 'shared/components/Button/Button';
import { Title, Text, Container } from './ModalCongrats.styled';
import { ReactComponent as Paw } from '../../icons/paw.svg';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsRegistered } from 'redux/auth/auth-selector';

const ModalCongrats = ({ setShowModal }) => {

  return (
    <Container>
      <Title>Congrats!</Title>
      <Text>Youre registration is success</Text>
      <Button className="btn" type="button" color="blue" width="248px" onClick={() => setShowModal(false)}>
        Go to profile <Paw stroke="#FFFFFF" fill="none" width="24px" height="24px" />
      </Button>
    </Container>
  );
};

export default ModalCongrats;


// import React from 'react';
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// // import CrossButton from 'shared/components/CrossButton/CrossButton';
// import Button from 'shared/components/Button/Button';
// import {
//   Backdrop,
//   Wrapper,
//   Title,
//   Text,
//   CloseModalBtn,
// } from './ModalCongrats.styled';
// import { ReactComponent as Paw } from '../../icons/paw.svg';
// import { ReactComponent as CrossSmall } from '../../icons/cross-small.svg';
// // import plus from '../../icons/plus.svg';

// const modalRoot = document.querySelector('#modal-root');

// const ModalCongrats = ({ onClose, children, shouModal }) => {
//   useEffect(() => {
//     const handleKeyDowm = e => {
//       if (e.code === 'Escape') onClose();
//     };
//     window.addEventListener('keydown', handleKeyDowm);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDowm);
//     };
//   }, [onClose]);

//   const handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <Backdrop onClick={handleBackdropClick}>
//       <Wrapper>
//         <CloseModalBtn type="button" onClick={onClose}>
//           <CrossSmall />
//         </CloseModalBtn>
//         {/* <CrossButton onClick={onClose}/> */}
//         <Title>Congrats!</Title>
//         <Text>Youre registration is success</Text>
//         <Button type="button" color="white" width="248px" onClick={onClose}>
//           Go to profile <Paw width="24px" height="24px" />
//         </Button>
//       </Wrapper>
//     </Backdrop>,
//     modalRoot
//   );
// };

// export default ModalCongrats;


