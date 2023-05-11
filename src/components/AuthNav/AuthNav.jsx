import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReusableButton from 'shared/components/Button';
import UseFormExample from 'shared/hooks/useForm/UseFormExample';
import { AuthNavCss } from './AuthNav.styled';

const AuthNav = () => {
    const navigate = useNavigate();
  return (
    <AuthNavCss>
      <ReusableButton type='submit' color='black' text="Here's the button!" onClick={() => navigate('/login')}>
        Log in
      </ReusableButton>
      <ReusableButton type="button" onClick={() => navigate('/register')}>
        Registration
      </ReusableButton>
    </AuthNavCss>
  );
}

export default AuthNav