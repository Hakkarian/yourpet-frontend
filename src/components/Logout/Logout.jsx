//import {useState} from "react";

import {ReactComponent as OutIcon} from '../../icons/logout.svg';
import {OutBtn, OutWrap, OutText} from './Logout.styled';

const Logout = () => {
    //state будее використаний  коли буде модалка
    //const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <OutWrap>
            {/* onClick={() => setIsOpenModal(true)} */}
            <OutBtn type="button" >
                <OutIcon stroke="#54ADFF" />
            </OutBtn>
            <OutText>Log Out</OutText>
        </OutWrap>
    )
};

export default Logout;