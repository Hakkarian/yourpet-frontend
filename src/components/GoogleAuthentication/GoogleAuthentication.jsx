import { GoogleCss } from "./GoogleAuthentication.styled";

import google from '../../images/logo/google-logo.png';

const GoogleAuthentication = () => {

  const frontendUrl = process.env.REACT_APP_API_URL;
  console.log(`${frontendUrl}/auth/google`);
  
  return (
    <GoogleCss href="http://localhost:3030/api/auth/google"> <img src={google} alt="Google logo" width='30' height='30'/> Authenticate with Google</GoogleCss>
  );
}

export default GoogleAuthentication;