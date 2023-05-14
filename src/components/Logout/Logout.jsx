//import {useState} from "react";
import { useDispatch } from 'react-redux';

import {ReactComponent as OutIcon} from '../../icons/logout.svg';
import {OutBtn, OutWrap, OutText} from './Logout.styled';
import { logout } from 'redux/auth/auth-operations';


const Logout = () => {
    const dispatch = useDispatch();
  
    //state будее використаний  коли буде модалка
    //const [isOpenModal, setIsOpenModal] = useState(false);

    const onLogOut = () => {
      dispatch(logout());
      //setIsOpenModal(true)}
    };

    return (
        <OutWrap>

            <OutBtn type="button" onClick={onLogOut} >

            {/* onClick={() => setIsOpenModal(true)} */}

                <OutIcon stroke="#54ADFF" />
            </OutBtn>
            <OutText>Log Out</OutText>
        </OutWrap>
    )
};

export default Logout;