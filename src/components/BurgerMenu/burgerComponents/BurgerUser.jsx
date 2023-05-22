import { ReactComponent as User } from '../img/user.svg';
import { BurgerUserStyled } from './burgerComp.styled';

const BurgerUser = ({userName}) => {
    return (
        <BurgerUserStyled>
            <User/>
            <p>{userName}</p>
        </BurgerUserStyled>
    )
};
BurgerUser.defaultProps = {
    userName: 'no name',
};


export default BurgerUser;