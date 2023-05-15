import React from 'react';

// const OurFriendsPage = () => {
//   return <div>OurFriendsPage</div>;
// };

// export default OurFriendsPage;



// не видяляйте це, я тут відкриваю модалку
// import ModalCongrats from 'components/ModalCongrats';
import ModalNotice from 'components/ModalNotice/ModalNotice';
// import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

import { useToggle } from 'shared/hooks/useToggle'

// import { ModalTitle, ModalText, ColorSpan } from 'pages/OurFriendsPage/OurFriendsPage.styled';


const OurFriendsPage = () => {
  const { isOpen, open, close } = useToggle();

  return (
    // <div>
    //   OurFriendsPage
    //   <button type="button" onClick={open}>
    //     open modal
    //   </button>
    //   {/* {isOpen && <ModalCongrats onClose={close}></ModalCongrats>} */}
    //   {isOpen && <ModalApproveAction onClose={close}>
    //   <ModalTitle>Already leaving?</ModalTitle>
    //     </ModalApproveAction>}
    // </div>
    <div>
    OurFriendsPage
    <button type="button" onClick={open}>
      open modal
    </button>
    {/* {isOpen && <ModalCongrats onClose={close}></ModalCongrats>} */}
    {isOpen && <ModalNotice onClose={close}></ModalNotice>}
    {/* {isOpen && <ModalApproveAction onClose={close}> */}
   
    {/* <ModalTitle>Delete adverstiment?</ModalTitle>
    <ModalText>Are you sure you want to delete  <ColorSpan>“Cute dog looking <br></br>for a home”?</ColorSpan> 
<br></br>You can`t undo this action.</ModalText>
    
      </ModalApproveAction>} */}
  </div>
  );
};

export default OurFriendsPage;
