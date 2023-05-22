import { Link } from 'react-router-dom';

import { ReactComponent as User } from '../img/user.svg';
import { BurgerUserStyled } from './burgerComp.styled';

const BurgerUser = ({userName}) => {
    return (
        <BurgerUserStyled>
            <Link to="/user">
                <User/>
                <p>{userName}</p>
            </Link>
        </BurgerUserStyled>
    )
};
BurgerUser.defaultProps = {
    userName: 'no name',
};


export default BurgerUser;