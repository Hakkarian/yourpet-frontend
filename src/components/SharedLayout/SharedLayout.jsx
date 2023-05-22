import { Container } from 'shared/components/Container/Container.styled';
import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { theme, themeDark } from 'constants';

import { useContext } from 'react';
import { ThemeContext } from 'shared/utils/ThemeContext/themeProvider';
import {ModalProvider} from 'shared/components/Modalll/utils/ModalProvider';


const SharedLayout = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isLight ? theme : themeDark}>
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
    </ThemeProvider>
  );
};

export default SharedLayout