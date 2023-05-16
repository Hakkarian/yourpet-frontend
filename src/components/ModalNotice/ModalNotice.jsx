

import {
  ContactsLink,
  Container,
  Img,
  Title,
  List,
  Item,
  Text,
  BtnContainer,
} from './ModalNotice.styled';
// import CrossButton from 'shared/components/CrossButton/CrossButton';

import { ReactComponent as HeartIcon } from '../../icons/heart.svg';

import Button from 'shared/components/Button/Button';
import defaultImage from '../../images/default-user-img.jpg';



const ModalNotice = () => {
  
  return (
        <div>
          <Container>
          <Img
      src={defaultImage}
      alt='User'/>
          <div>
            <Title>Title</Title>
            <List>
              <Item>
                <Text>Name:</Text>
              </Item>
              <Item>
                <Text>Birthday:</Text>
              </Item>
              <Item>
                <Text>Breed:</Text>
              </Item>
              <Item>
                <Text>Place:</Text>
              </Item>
              <Item>
                <Text>The sex:</Text>
              </Item>
              <Item>
                <Text>Email:</Text>
              </Item>
              <Item>
                <Text>Phone:</Text>
              </Item>
            </List>
          </div>
          </Container>

          <Text>Coments:</Text>

          <BtnContainer>
        
                
          <Button type="button" color="blue" width="129px">
            Add to <HeartIcon width="24px" height="24px" />
          </Button>

          <ContactsLink>Contacts</ContactsLink>
          </BtnContainer>
        </div>
  
  );
};

export default ModalNotice;




// import React from 'react';
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import {
//   Backdrop,
//   Wrapper,
//   CloseModalBtn,
//   ContactsLink,
//   Container,
//   Img,
//   Title,
//   List,
//   Item,
//   Text,
//   BtnContainer,
// } from './ModalNotice.styled';
// // import CrossButton from 'shared/components/CrossButton/CrossButton';
// import { ReactComponent as CrossIcon } from '../../icons/cross-small.svg';
// import { ReactComponent as HeartIcon } from '../../icons/heart.svg';

// import Button from 'shared/components/Button/Button';
// import defaultImage from '../../images/default-user-img.jpg';

// const modalRoot = document.querySelector('#modal-root');

// const ModalNotice = ({ onClose, children }) => {
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
//           <CrossIcon />
//         </CloseModalBtn>
//         {/* <CrossButton type='button' onClick={onClose}/> */}
//         <div>
//           <Container>
//           <Img
//       src={defaultImage}
//       alt='User'/>
//           <div>
//             <Title>Title</Title>
//             <List>
//               <Item>
//                 <Text>Name:</Text>
//               </Item>
//               <Item>
//                 <Text>Birthday:</Text>
//               </Item>
//               <Item>
//                 <Text>Breed:</Text>
//               </Item>
//               <Item>
//                 <Text>Place:</Text>
//               </Item>
//               <Item>
//                 <Text>The sex:</Text>
//               </Item>
//               <Item>
//                 <Text>Email:</Text>
//               </Item>
//               <Item>
//                 <Text>Phone:</Text>
//               </Item>
//             </List>
//           </div>
//           </Container>

//           <Text>Coments:</Text>

//           <BtnContainer>
        
                
//           <Button type="button" color="blue" width="129px">
//             Add to <HeartIcon width="24px" height="24px" />
//           </Button>

//           <ContactsLink>Contacts</ContactsLink>
//           </BtnContainer>

          
//         </div>
//       </Wrapper>
//     </Backdrop>,
//     modalRoot
//   );
// };

// export default ModalNotice;
