import React from 'react'
import { Link } from 'react-router-dom';

import { DivTag } from './errorPage.styled';

const ErrorPage = () => {
  return (
    <DivTag>
      <h2>{`Ooops! This page not found :(`}</h2>
      <div></div>
      <Link to="/">
        <button type="button">To main page</button>
      </Link>
    </DivTag>
  )
};

export default ErrorPage;