import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../../../shares/Modal/utils/modalContext";

import sirojhkaData from "./sirojhka.json";
// import navListData from "./headerNavList.json";

import { BurgerNavStyled } from "./burgerComp.styled";


const BurgerNav = () => {
    const { close } = useContext(ModalContext);

    const navList = sirojhkaData.map(({id, name}) => (
        <NavLink onClick={close} key={id} to={name}>{name}</NavLink>
    ));
    return (
        <BurgerNavStyled>
            {navList}
        </BurgerNavStyled>
    )
};


export default BurgerNav;