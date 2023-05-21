// import React, { useEffect } from 'react'
// import jwt_decode from 'jwt-decode';
// import { register } from 'redux/auth/auth-operations';
// import { useDispatch } from 'react-redux';
// import { googleAuth } from 'redux/auth/auth-slice';

const GoogleAuthentication = () => {
  //  const dispatch = useDispatch();

  //    useEffect(() => {
  //        /* global google */
  //        google.accounts.id.initialize({
  //          client_id:
  //                '636271452984-is9qjcnf72o5964ambhhdp1q2cbtlfcu.apps.googleusercontent.com',
  //            callback: handleCallbackResponse
  //        });
  //        google.accounts.id.renderButton(
  //            document.getElementById('signInDiv'),
  //            {theme: 'outline', size: 'large'}
  //      )
      
  //      google.accounts.id.prompt()
  //    }, [])

  // const handleCallbackResponse = (response) => {
  //    const info = jwt_decode(response.credential);
  //    const payload = {
  //      token: response.credential,
  //      user: {
  //        email: info.email,
  //        userId: info.sub
  //      }
  //   }
  //   // const password = `HASH${Math.floor(Math.random(100))}hm`
  //   console.log(info)
  //   console.log(payload)
  //   dispatch(googleAuth(payload))
    
  //    }
  //  return (
  //    <div onClick={handleCallbackResponse} id='signInDiv'></div>
  //  )
}

export default GoogleAuthentication