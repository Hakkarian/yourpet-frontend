import { GoogleCss } from "./GoogleAuthentication.styled";

import google from '../../images/logo/google-logo.png';

const GoogleAuthentication = () => {

  const frontendUrl = process.env.REACT_APP_API_URL;
  
  return (
    <GoogleCss href={`${frontendUrl}/api/auth/google`}>
      <img src={google} alt="Google logo" width="30" height="30" /> Authenticate
      with Google
    </GoogleCss>
  );
}

export default GoogleAuthentication;