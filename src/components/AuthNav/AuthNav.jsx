import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReusableButton from 'shared/components/ReusableButton';
import { AuthNavCss, PawCss, ReusableButtonCss } from './AuthNav.styled';

const AuthNav = () => {
  const navigate = useNavigate();

  const handleRegister = () => navigate('/register')
  return (
    <AuthNavCss>
      <ReusableButtonCss>
        Log IN
        <PawCss width="24" height="24" />
      </ReusableButtonCss>
      <ReusableButton onClick={handleRegister}>Register</ReusableButton>
    </AuthNavCss>
  );
};

export default AuthNav;
