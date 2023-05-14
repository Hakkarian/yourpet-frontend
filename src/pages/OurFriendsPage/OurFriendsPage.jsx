import React from 'react';

const OurFriendsPage = () => {
  return <div>OurFriendsPage</div>;
};

export default OurFriendsPage;



// не видяляйте це, я тут відкриваю модалку
// import ModalCongrats from 'components/ModalCongrats';

// import { useToggle } from 'hooks/useToggle';
// import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
// import { ModalTitle } from 'pages/UserPage/UserPage.styled';

// const OurFriendsPage = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <div>
//       OurFriendsPage
//       <button type="button" onClick={open}>
//         open modal
//       </button>
//       {/* {isOpen && <ModalCongrats onClose={close}></ModalCongrats>} */}
//       {isOpen && <ModalApproveAction onClose={close}>
//       <ModalTitle>Already leaving?</ModalTitle>
//         </ModalApproveAction>}
//     </div>
//   );
// };

// export default OurFriendsPage;
