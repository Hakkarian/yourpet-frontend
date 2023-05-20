// import { useToggleModal } from "../../shares/Modal/utils/useToggleModal";

import Logo from "../Header/Logo/Logo";
import { BurgerDiv } from "./burgerMenu.styled";
import Button from "../../shares/Button/Button";
import { ReactComponent as MenuCross } from '../../../img/icons/cross_big.svg';
import BurgerMain from "./burgerComponents/BurgerMain";

const BurgerMenu = (props) => {

    return (
        <>
            <BurgerDiv>
                <Logo className="logo_link" {...props} />

                <Button {...props} className="btn_close" buttonView="close">
                    <MenuCross  width="24" height="24"/>
                </Button>

                <BurgerMain/>
                
            </BurgerDiv>
        </>
    )
};


export default BurgerMenu;