import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage  } from "formik";

import {ReactComponent as Check} from '../../icons/check.svg';
import { ImgDiv, Input, InputWrap, CheckWrap,CheckBtn, IconWrap, InputText, Label, CameraIcon, FormThumb} from "./UserData.styled";
import { info } from "redux/auth/auth-operations";
import { userValidationSchema } from "./userValidation";
import UserDataItem from "components/UserDataItem";
import  UserImage  from '../UserImage';
import { selectUser } from "redux/auth/auth-selector";

const UserData = () => {
   const dispatch = useDispatch();
   const fileRef = useRef(null);
    const user = useSelector(selectUser);
    const {name, email, birthday, phone, city, avatar } = user;
 
    const handleSubmit = (data) => {
      dispatch(info(data));
    };

    return (
        <div>
            <ImgDiv>
            <Formik 
            initialValues={{
                file: avatar || null,
                name:name || '',
                email: email || '',
                birthday: birthday || '',
                phone: phone || '',
                city:city || '',
            }}
            validationSchema={userValidationSchema}
            onSubmit={values => console.log(values)}>
         {({values, setFieldValue}) => (
            <FormThumb>
              <InputWrap>
                <Input type="file" id="input__file" ref={fileRef} onChange={event => {
                    setFieldValue('file', event.target.files[0]); console.log(event.target.files[0]);
                }}></Input>
                <Label htmlFor="input__file">
                  <IconWrap><CameraIcon /></IconWrap>  
                   <InputText>Edit photo</InputText>
                </Label>
                </InputWrap>
                <ErrorMessage name="file" />
                {values.file ? 
                <UserImage file={values.file}/> :  <img src={require("../../images/default-user-img.jpg")} alt="User" />}
              <CheckWrap>
                <Check width="24px" height="24px"/>
                <CheckBtn type="button" onClick={() => { fileRef.current.click()}}>Confirm</CheckBtn>
            </CheckWrap>
            <div>
                    <UserDataItem value={name} type="text" name="name" onSubmit={handleSubmit} label="Name: "/>
                    <UserDataItem value={email} type="email" name="email" onSubmit={handleSubmit} label="Email: " />
                    <UserDataItem value={birthday} type="text" name="birthday" onSubmit={handleSubmit} label="Birthday: "/>
                    <UserDataItem value={phone} type="text" name="phone" onSubmit={handleSubmit} label="Phone: "/>
                    <UserDataItem value={city} type="text" name="city" onSubmit={handleSubmit} label="City: "/>
                </div>
            </FormThumb>
         )}
          </Formik>
            </ImgDiv>
        </div>
    )
};

export default UserData;