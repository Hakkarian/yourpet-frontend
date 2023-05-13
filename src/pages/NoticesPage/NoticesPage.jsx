import React from 'react'

import { useToggle } from 'hooks/useToggle';

import ModalNotice from 'components/ModalNotice/ModalNotice';

const NoticesPage = () => {
  const { isOpen, open, close } = useToggle();

  return (
 
    <div>NoticesPage
      <button type='button' onClick={open}>learn More</button>
        {isOpen && <ModalNotice onClose={close} ></ModalNotice>}
    </div>

  )
}

export default NoticesPage