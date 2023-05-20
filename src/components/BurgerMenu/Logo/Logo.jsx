import { LinkLogoStyles } from "./logo.styled";
import logo from "../img/logo_pet_big_2x.png";

const Logo = (props) => {
    return (
        <LinkLogoStyles {...props} to="/">
            <img src={logo} alt="logo" />
        </LinkLogoStyles>
    )
}


export default Logo;