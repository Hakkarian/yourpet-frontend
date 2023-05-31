import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from 'shared/components/Modalll/utils/ModalProvider';

import { ReactComponent as User } from '../img/user.svg';
import { BurgerUserStyled } from './burgerComp.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selector';
import { ImgCss } from 'components/Header/Header.styled';

const BurgerUser = ({ userName }) => {
    const { close } = useContext(ModalContext);
    const avatar = useSelector(selectUser);
    
    return (
      <BurgerUserStyled>
          <Link onClick={close} to="/user">
                {!avatar && <User />}
            {avatar && (
              <ImgCss src={avatar} alt="user" width="30" height="30" />
            )}
            <p>{userName}</p>
          </Link>
      </BurgerUserStyled>
    );
};
BurgerUser.defaultProps = {
    userName: 'no name',
};


export default BurgerUser;