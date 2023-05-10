import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthNav = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate('/login')}>
        Log in
      </button>
      <button type="button" onClick={() => navigate('/register')}>
        Registration
      </button>
    </div>
  );
}

export default AuthNav