import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {ModalContext} from "shared/components/Modalll/utils/ModalProvider";

import navListData from "./headerNavList.json";
import { BurgerNavStyled } from "./burgerComp.styled";


const BurgerNav = () => {
    const { close } = useContext(ModalContext);

    const navList = navListData.map(({id, name, path, className}) => (
        <NavLink className={className}  onClick={close} key={id} to={path}>{name}</NavLink>
    ));


    return (
        <BurgerNavStyled>
            {navList}
        </BurgerNavStyled>
    )
};


export default BurgerNav;