import { Container } from 'shared/components/Container/Container.styled';
import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import {ModalProvider} from 'shared/components/Modalll/utils/ModalProvider';


const SharedLayout = () => {

  return (
    <ModalProvider>
      <div>
        <Container>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </div>
    </ModalProvider>
  );
}

export default SharedLayout