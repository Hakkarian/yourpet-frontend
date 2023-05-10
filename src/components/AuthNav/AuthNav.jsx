import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReusableButton from 'shared/components/Button';
import UseFormExample from 'shared/hooks/useForm/UseFormExample';

const AuthNav = () => {
    const navigate = useNavigate();
  return (
    <div>
      <ReusableButton type='submit' color='black' text="Here's the button!" onClick={() => navigate('/login')}>
        Log in
      </ReusableButton>
      <ReusableButton type="button" onClick={() => navigate('/register')}>
        Registration
      </ReusableButton>
    </div>
  );
}

export default AuthNav