// import { useToggleModal } from "../../shares/Modal/utils/useToggleModal";

// import AdaptiveLogo from "shared/components/AdaptiveLogo";
import Logo from "./Logo/Logo";
import { BurgerDiv } from "./burgerMenuPage.styled";
// import Button from "shared/components/Button/Button";
// import { ReactComponent as MenuCross } from './img/cross_big.svg';
import BurgerMain from "./burgerComponents/BurgerMain";

import CrossButton from "shared/components/CrossButton/CrossButton";

const BurgerMenu = (props) => {

    return (
        <>
            <BurgerDiv>
                <Logo className="logo_link" {...props} />

                {/* <Button {...props} className="btn_close" color="close">
                    <MenuCross  width="24" height="24"/>
                </Button> */}

                <CrossButton className="btn_close"  {...props} />
                
                <BurgerMain/>
                
            </BurgerDiv>
        </>
    )
};


export default BurgerMenu;