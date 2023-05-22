import { Link } from "react-router-dom";
import { useContext } from "react";
import {ModalContext} from "shared/components/Modalll/utils/ModalProvider";

import Button from "shared/components/Button/Button";
import { BurgerAuthNavStyled } from "./burgerComp.styled";
import { ReactComponent as Paw } from '../../../icons/paw.svg';

const BurgerAuthNav = (props) => {
    const { close } = useContext(ModalContext);

    return (
        <BurgerAuthNavStyled>
            <Link to="/login">
                <Button className="one" onClick={close} color="yellow" scale="0.8">
                    {"Log IN"}
                    <Paw/>
                </Button>
            </Link>
            <Link to="/registration">
                <Button className="two" onClick={close} color="yellow" scale="0.8">Registration</Button>
            </Link>
        </BurgerAuthNavStyled>
    )
};


export default BurgerAuthNav;