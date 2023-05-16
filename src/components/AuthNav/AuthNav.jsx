import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthNavCss, ButtonCss, PawCss } from './AuthNav.styled';

const AuthNav = () => {
  const navigate = useNavigate();

  return (
    <AuthNavCss>
      <ButtonCss onClick={() => navigate('/login')}>
        Log IN
        <PawCss width="24" height="24" fill='none' />
      </ButtonCss>
      <ButtonCss onClick={() => navigate('/register')}>Register</ButtonCss>
    </AuthNavCss>
  );
};

export default AuthNav;
