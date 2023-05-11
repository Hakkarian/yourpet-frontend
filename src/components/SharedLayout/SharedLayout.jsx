import { Container } from 'shared/components/Container/Container.styled';
import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'


const SharedLayout = () => {
  return (
    <div>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}

export default SharedLayout