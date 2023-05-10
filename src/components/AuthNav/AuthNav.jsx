import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonCss } from './AuthNav.styled';

const AuthNav = () => {
    const navigate = useNavigate();
  return (
    <div>
      <ButtonCss type="button" onClick={() => navigate('/login')}>
        Log in
      </ButtonCss>
      <button type="button" onClick={() => navigate('/register')}>
        Registration
      </button>
    </div>
  );
}

export default AuthNav