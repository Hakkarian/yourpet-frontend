import React from "react";
import { useDispatch } from "react-redux";

import {ReactComponent as Check} from '../../icons/check.svg';
import { ImgDiv, ImgInput, IconWrap } from "./UserData.styled";
import useForm from "./useForm";
import inputs from "./inputs";
import { info } from "redux/auth/auth-operations";
import UserDataItem from "components/UserDataItem";


const initialState = {
    name: "",
    email: "",
    birthday: "",
    phone: "",
    city: "",
};

const UserData = () => {
   const dispatch = useDispatch();
    const {state, handleChange} = useForm({initialState});
    const {name, email, birthday, phone, city } = state;
 
    const handleSubmit = (data) => {
      dispatch(info(data));
    };

    return (
        <div>
            <ImgDiv>
                <IconWrap>
                <ImgInput type="file" ></ImgInput>
                </IconWrap>
                <div>
                    <Check />
                    <button>Confirm</button>
                </div>
                <div>
                    <UserDataItem value={name} handleChange={handleChange} {...inputs.name} onSubmit={handleSubmit} />
                    <UserDataItem value={email} handleChange={handleChange} {...inputs.email} onSubmit={handleSubmit} />
                    <UserDataItem value={birthday} handleChange={handleChange} {...inputs.birthday} onSubmit={handleSubmit} />
                    <UserDataItem value={phone} handleChange={handleChange} {...inputs.phone} onSubmit={handleSubmit} />
                    <UserDataItem value={city} handleChange={handleChange} {...inputs.city} onSubmit={handleSubmit} />
                </div>
            </ImgDiv>
        </div>
    )
};

export default UserData;
//avatar - backend