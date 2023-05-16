import React from 'react';

const OurFriendsPage = () => {
  return <div>OurFriendsPage</div>;
};

export default OurFriendsPage;

// не видяляйте це, я тут відкриваю модалку

// import Modal from 'shared/components/Modal/Modal';
// import ModalDelete from 'components/ModalDelete';
// import ModalCongrats from 'components/ModalCongrats';
// import ModalLogOut from 'components/ModalLogOut';

// import { useToggle } from 'shared/hooks/useToggle';
// import ModalNotice from 'components/ModalNotice';

// const OurFriendsPage = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
    // <div>
    //   OurFriendsPage
    //   <button type="button" onClick={open}>
    //     open modal
    //   </button>
    //   {isOpen && (
    //     <Modal onClose={close} >
          
    //       {/* <ModalCongrats onClose={close}/> */}

         
    //       {/* <ModalDelete onClose={close} /> */}

    //       {/* <ModalLogOut onClose={close}/> */}

    //       {/* <ModalNotice onClose={close} /> */}

    //     </Modal>
    //   )}
    // </div>

{/* <div>
OurFriendsPage
<button type="button" onClick={open}>
  open modal
</button>
{isOpen && (<ModalNotice onClose={close}/>)}
</div>
  );
};

export default OurFriendsPage; */}
