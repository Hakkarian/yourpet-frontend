import {useState} from "react";
import { useDispatch } from 'react-redux';

import {OutBtn, OutWrap, OutText, Icon} from './Logout.styled';
import { logout } from 'redux/auth/auth-operations';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';


const Logout = () => {
    const dispatch = useDispatch();
  
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onLogOut = () => {
      dispatch(logout());
      setIsOpenModal(true)
    };

    return (
        <OutWrap>
            <OutBtn type="button" onClick={onLogOut} >
                <Icon />
            </OutBtn>
            <OutText>Log Out</OutText>
            {isOpenModal && (
                <ModalApproveAction /> )}
        </OutWrap>
    )
};

export default Logout;