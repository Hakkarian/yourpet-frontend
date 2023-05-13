import React from 'react';

import ModalCongrats from 'components/ModalCongrats';

import { useToggle } from 'hooks/useToggle';

const OurFriendsPage = () => {
  const { isOpen, open, close } = useToggle();

  return <div>OurFriendsPage
    <button type='button' onClick={open}>congrats</button>
    {isOpen && <ModalCongrats onClose={close} ></ModalCongrats>}
  </div>;
};

export default OurFriendsPage;
