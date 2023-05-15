import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthNavCss, ButtonCss, PawCss } from './AuthNav.styled';

const AuthNav = () => {
  const navigate = useNavigate();

  const handleRegister = () => navigate('/register')
  return (
    <AuthNavCss>
      <ButtonCss>
        Log IN
        <PawCss width="24" height="24" />
      </ButtonCss>
      <ButtonCss onClick={handleRegister}>Register</ButtonCss>
    </AuthNavCss>
  );
};

export default AuthNav;
