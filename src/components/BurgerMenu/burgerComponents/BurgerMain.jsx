
import { BurgerMainStyled } from "./burgerComp.styled";
import BurgerAuthNav from "./BurgerAuthNav";
import BurgerNav from "./BurgerNav";

const BurgerMain = (props) => {
    return (
        <BurgerMainStyled>

            <BurgerAuthNav />
            <BurgerNav/>

        </BurgerMainStyled>
    )
};


export default BurgerMain;