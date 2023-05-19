import React, { useEffect } from 'react'

const GoogleAuthentication = () => {

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id:
                '636271452984-is9qjcnf72o5964ambhhdp1q2cbtlfcu.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: 'outline', size: 'large'}
        )
    }, [])

    const handleCallbackResponse = (response) => {
        // console.log(first)
    }
  return (
    <div>GoogleAuthentication</div>
  )
}

export default GoogleAuthentication