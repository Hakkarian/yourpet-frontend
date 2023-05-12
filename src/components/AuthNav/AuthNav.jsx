import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReusableButton from 'shared/components/ReusableButton';
import { AuthNavCss, IconCss } from './AuthNav.styled';

import paw from '../../icons/paw.svg';
import ReusableInput from 'shared/components/ReusableInput/ReusableInput';

const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <AuthNavCss>
      <ReusableButton
        type="button"
        display='flex'
        alignItems='center'
        gap='5px'
        color="#FFC107"
        border="1px solid #FFC107"
        text="Log IN"
        backgroundColor="transparent"
        borderRadius="40px"
        hovfocColor="white"
        hovfocBgColor="#FFC107"
        transition="background-color 250ms ease-in-out, color 250ms ease-in-out, border 250ms ease-in-out"
        onClick={() => navigate('/login')}
      >
        <IconCss src={paw} alt="paw" width="24" height="24" />
      </ReusableButton>
      <ReusableButton
        type="button"
        color="#FFC107"
        border="1px solid #FFC107"
        text="Registration"
        backgroundColor="transparent"
        borderRadius="40px"
        hovfocColor="white"
        hovfocBgColor="#FFC107"
        transition="background-color 250ms ease-in-out, color 250ms ease-in-out, border 250ms ease-in-out"
        onClick={() => navigate('/register')}
      />    </AuthNavCss>
  );
};

export default AuthNav;
