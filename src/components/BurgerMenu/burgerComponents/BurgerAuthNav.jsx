import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../../../shares/Modal/utils/modalContext";

import Button from "../../../shares/Button/Button";
import { BurgerAuthNavStyled } from "./burgerComp.styled";

const BurgerAuthNav = (props) => {
    const { close } = useContext(ModalContext);

    return (
        <BurgerAuthNavStyled>
            <Link to="/login">
                <Button className="btn" onClick={close} buttonView="yellow" scale="0.8">Log IN</Button>
            </Link>
            <Link to="/registration">
                <Button onClick={close} buttonView="yellow" scale="0.8">Registration</Button>
            </Link>
        </BurgerAuthNavStyled>
    )
};


export default BurgerAuthNav;