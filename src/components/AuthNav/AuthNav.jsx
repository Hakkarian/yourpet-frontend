import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReusableButton from 'shared/components/ReusableButton';
import { AuthNavCss, IconCss, PawCss } from './AuthNav.styled';

import { ReactComponent as Paw } from '../../icons/paw.svg';

const AuthNav = () => {
  const navigate = useNavigate();

  const handleRegister = () => navigate('/register')
  return (
    <AuthNavCss>
      <ReusableButton text='Log IN'  >
        <PawCss width='24' height='24' />
      </ReusableButton>
      <ReusableButton text='Register' onClick={handleRegister}/>
    </AuthNavCss>
  );
};

export default AuthNav;
