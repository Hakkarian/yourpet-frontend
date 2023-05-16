import { ContainerButton, ModalTitle, ModalText, ColorSpan, Container  } from './ModalDelete.styled';
import Button from 'shared/components/Button/Button';
import {ReactComponent as DeleteIcon} from '../../icons/trash.svg';

const ModalDelete = ({ onClose }) => {
  return (
    <Container>
       <ModalTitle>Delete adverstiment?</ModalTitle>
          <ModalText>
            Are you sure you want to delete{' '}
            <ColorSpan>
              “Cute dog looking <br></br>for a home”?
            </ColorSpan>
            <br></br>You can`t undo this action.
          </ModalText>
      <ContainerButton>
        <Button className="btn" type="button" color="white" width="129px" onClick={onClose}>
          Cancel
        </Button>
        <Button className="btn" type="button" color="blue" width="129px">
          Yes <DeleteIcon className="svg" width="24px" height="24px" />
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default ModalDelete;


// import React from 'react';
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import {
//   Backdrop,
//   Wrapper,
//   CloseModalBtn,
//   ContainerButton
// } from './ModalApproveAction.styled';

// // import CrossButton from 'shared/components/CrossButton/CrossButton';
// import { ReactComponent as CrossSmall } from '../../icons/cross-small.svg';
// import Button from 'shared/components/Button/Button';
// import {ReactComponent as DeleteIcon} from '../../icons/trash.svg';
// // import { ReactComponent as LogoutSvg} from '../../icons/logout.svg';
// // import { ReactComponent as Trash} from '../../icons/trash.svg';

// const modalRoot = document.querySelector('#modal-root');

// const ModalApproveAction = ({ onClose, children, shouModal }) => {
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
//         {/* <CrossButton type='button' onClick={onClose}/> */}
//         {children}
//         <ContainerButton>
//         <Button type="button" color="white" width="129px" onClick={onClose}>Cancel</Button>
//         <Button type="button" color="blue" width="129px">Yes <DeleteIcon width="24px" height="24px" /></Button>
//         </ContainerButton>
//       </Wrapper>
//     </Backdrop>,
//     modalRoot
//   );
// };

// export default ModalApproveAction;


