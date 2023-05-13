import React from 'react';

// import ModalCongrats from 'components/ModalCongrats';

import { useToggle } from 'hooks/useToggle';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const OurFriendsPage = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <div>
      OurFriendsPage
      <button type="button" onClick={open}>
        logout
      </button>
      {/* {isOpen && <ModalCongrats onClose={close}></ModalCongrats>} */}
      {isOpen && <ModalApproveAction onClose={close}>
      <h2>Already leaving?</h2>
        </ModalApproveAction>}
    </div>
  );
};

export default OurFriendsPage;
