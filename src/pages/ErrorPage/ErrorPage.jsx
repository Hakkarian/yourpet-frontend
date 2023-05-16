import React from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Button from 'shared/components/Button/Button';
import { DivTag } from './errorPage.styled';
import { ReactComponent as Paw } from '../../icons/paw.svg';

const ErrorPage = () => {
  return (
    <DivTag>
      <h2>{`Ooops! This page not found :(`}</h2>
      <div className='cat_div'>
        <MediaQuery minWidth={1280}>
          <div className='yellow_round_div'></div>
          {/* <div className='yellow_round_back_div'></div> */}
        </MediaQuery>
      </div>
      <Link to="/">
        <Button type="button" color="blue" width="248px">
          {"To main page"}
          <Paw></Paw>
        </Button>
      </Link>
    </DivTag>
  )
};

export default ErrorPage;