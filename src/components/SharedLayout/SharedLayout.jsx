import { Container } from 'shared/components/Container/Container.styled';
import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import ModalContext from 'shared/components/Modalll/utils/modalContext';
import { useToggleModalContexst } from 'shared/components/Modalll/utils/useToggleModalContexst';


const SharedLayout = () => {
  const { isOpenContext, open, close, toggleContext } = useToggleModalContexst(false);

  return (
    <ModalContext.Provider value={{ isOpenContext, open, close, toggleContext }}>
      <div>
        <Container>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </div>
    </ModalContext.Provider>
  );
}

export default SharedLayout