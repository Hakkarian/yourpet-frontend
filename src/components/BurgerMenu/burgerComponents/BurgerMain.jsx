import MediaQuery from "react-responsive";

import { BurgerMainStyled } from "./burgerComp.styled";
import BurgerAuthNav from "./BurgerAuthNav";
import BurgerNav from "./BurgerNav";

const BurgerMain = () => {
    return (
        <BurgerMainStyled>

            <MediaQuery maxWidth={767}>
                <BurgerAuthNav />
            </MediaQuery>

            <BurgerNav/>

        </BurgerMainStyled>
    )
};


export default BurgerMain;