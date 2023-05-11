import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReusableButton from 'shared/components/Button'
import { AuthNavCss } from './AuthNav.styled';

const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <AuthNavCss>
      <ReusableButton
        type="button"
        color="white"
        border="1px solid #FFC107"
        text="Log IN"
        backgroundColor="transparent"
        borderRadius="40px"
        onClick={() => navigate('/login')}
      >
        Log in
      </ReusableButton>
      <ReusableButton
        type="button"
        color="white"
        border="1px solid #FFC107"
        text="Registration"
        backgroundColor="transparent"
        borderRadius="40px"
        onClick={() => navigate('/register')}
      >
        Registration
      </ReusableButton>
    </AuthNavCss>
  );
};

export default AuthNav;
