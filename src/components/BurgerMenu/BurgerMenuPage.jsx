import { useContext } from "react";
import { ThemeContext } from "shared/utils/ThemeContext/themeProvider";

import Logo from "./Logo/Logo";
import { BurgerDiv } from "./burgerMenuPage.styled";
// import Button from "shared/components/Button/Button";
// import { ReactComponent as MenuCross } from './img/cross_big.svg';
import BurgerMain from "./burgerComponents/BurgerMain";

import CrossButton from "shared/components/CrossButton/CrossButton";
import ThemeSwitcher from "shared/utils/ThemeContext/ThemeSwitcher/ThemeSwitcher";

const BurgerMenu = (props) => {
    const { isLight, toggleTheme } = useContext(ThemeContext);

    return (
        <BurgerDiv>
            <Logo className="logo_link" {...props} />

            {/* <Button {...props} className="btn_close" color="close">
                <MenuCross  width="24" height="24"/>
            </Button> */}

            <CrossButton className="btn_close"  {...props} />
            <BurgerMain/>
            
            <ThemeSwitcher isLight={isLight} onClick={toggleTheme}/>
        </BurgerDiv>
    )
};


export default BurgerMenu;