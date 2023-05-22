import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
import { selectIsLoggedIn,selectUser } from "redux/auth/auth-selector";

import { BurgerMainStyled } from "./burgerComp.styled";
import BurgerUser from "./BurgerUser";
import BurgerAuthNav from "./BurgerAuthNav";
import BurgerNav from "./BurgerNav";

const BurgerMain = () => {
    const isLogin = useSelector(selectIsLoggedIn);
    const { name } = useSelector(selectUser);

    const ViewAuth = (props) => (
        <MediaQuery maxWidth={767}>
            <BurgerAuthNav />
        </MediaQuery>
    );
    const ViewUser = (props) => (
        <MediaQuery maxWidth={767}>
            <BurgerUser userName={name} />
        </MediaQuery>
    );

    return (
        <BurgerMainStyled>

            {!isLogin ? <ViewAuth /> : <ViewUser />}

            <BurgerNav />

        </BurgerMainStyled>
    )
};


export default BurgerMain;