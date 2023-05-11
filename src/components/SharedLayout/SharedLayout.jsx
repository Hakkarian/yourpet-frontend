import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './SharedLayout.styled';

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