import React from "react";
import { useDispatch } from "react-redux";

import {ReactComponent as Check} from '../../icons/check.svg';
import { ImgDiv, Input, InputWrap, UserImage, CheckWrap,CheckBtn, IconWrap, InputText, Label} from "./UserData.styled";
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
            <UserImage src={require("../../images/default-user-img.jpg")} alt="User"/>
                <InputWrap>
                <Input type="file" id="input__file"></Input>
                <Label htmlFor="input__file">
                  <IconWrap><img src={require("../../icons/camera.png")} alt="Edit"/></IconWrap>  
                   <InputText>Edit photo</InputText>
                </Label>
                </InputWrap>
                <CheckWrap>
                    <Check width="24px" height="24px"/>
                    <CheckBtn>Confirm</CheckBtn>
                </CheckWrap>
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