import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from 'shared/components/Modalll/utils/ModalProvider';

import { ReactComponent as User } from '../img/user.svg';
import { BurgerUserStyled } from './burgerComp.styled';

const BurgerUser = ({ userName }) => {
    const { close } = useContext(ModalContext);
    
    return (
        <BurgerUserStyled>
            <Link onClick={close} to="/user">
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