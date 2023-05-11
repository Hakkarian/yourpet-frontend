import { Container } from 'components/Container/Container.styled';
import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'


const SharedLayout = () => {
  return (
    <div>
      <Container>
      <Header />
        <Outlet />
      </Container>
    </div>
  );
}

export default SharedLayout