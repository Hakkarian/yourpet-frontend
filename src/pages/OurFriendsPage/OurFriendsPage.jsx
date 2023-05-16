import React from 'react';

// const OurFriendsPage = () => {
//   return <div>OurFriendsPage</div>;
// };

// export default OurFriendsPage;

// не видяляйте це, я тут відкриваю модалку
// import ModalCongrats from 'components/ModalCongrats';
// import ModalNotice from 'components/ModalNotice/ModalNotice';
// import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'shared/components/Modal/Modal';
import ModalDelete from 'components/ModalDelete';
import ModalCongrats from 'components/ModalCongrats';
import ModalNotice from 'components/ModalNotice';


import { useToggle } from 'shared/hooks/useToggle';
import ModalLogOut from 'components/ModalLogOut';



// import {
//   ModalTitle,
//   ModalText,
//   ColorSpan,
// } from 'pages/OurFriendsPage/OurFriendsPage.styled';

const OurFriendsPage = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <div>
      OurFriendsPage
      <button type="button" onClick={open}>
        open modal
      </button>
      {isOpen && (
        <Modal onClose={close} >
          
          {/* <ModalCongrats onClose={close}/> */}

         
          {/* <ModalDelete onClose={close} /> */}

          <ModalLogOut onClose={close}/>

          {/* <ModalNotice onClose={close} /> */}

        </Modal>
      )}
    </div>
  );
};

export default OurFriendsPage;
