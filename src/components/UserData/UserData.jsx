import React, {useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage  } from "formik";

import { ImageDef, Input, InputWrap, IconWrap, InputText, Label, CameraIcon, FormThumb, CheckIcon, Wrapper} from "./UserData.styled";
import { info } from "redux/auth/auth-operations";
import { userValidationSchema } from "./userValidation";
import UserDataItem from "components/UserDataItem";
import  UserImage  from '../UserImage';
import { selectUser } from "redux/auth/auth-selector";

const UserData = () => {
  const [photo, setPhoto] = useState(null);
   const dispatch = useDispatch();
   const fileRef = useRef(null);
    const user = useSelector(selectUser);
    const {name, email, birthday, phone, city, avatar } = user;
 
    const handleSubmit = (data) => {
      dispatch(info(data, photo));
    };

    const handleChange = event => {
      //console.log(event.currentTarget.name);
    };

    return (
        <div>
            <Formik 
            initialValues={{
                file: avatar || null,
                name:name || 'Anna',
                email: email || 'anna00@gmail.com',
                birthday: birthday || '00.00.0000',
                phone: phone || '+38000000000',
                city:city || 'Kiev',
            }}
            validationSchema={userValidationSchema}
            onSubmit={(values, actions) => console.log('submit', values)}>
         {({values, setFieldValue}) => (
            <FormThumb>
               {values.file ? 
                <UserImage file={values.file}/> :  <ImageDef src={require("../../images/default-user-img.jpg")} alt="User" width="182px" height="182px"/>}
              {values.file ? (<InputWrap>
              <Input type="file" id="input__file" ref={fileRef} onChange={event => {
                  setFieldValue('file', event.target.files[0]); setPhoto(event.target.files[0]); console.log(event.target.files[0]);
              }}></Input>
              <Label htmlFor="input__file">
                <IconWrap><CheckIcon /></IconWrap>  
                 <InputText>Confirm</InputText>
              </Label>
              <ErrorMessage name="file" />
              </InputWrap>) : (
              <InputWrap>
              <Input type="file" id="input__file" ref={fileRef} onChange={event => {
                  setFieldValue('file', event.target.files[0]); console.log(event.target.files[0]);
              }}></Input>
              <Label htmlFor="input__file">
                <IconWrap><CameraIcon /></IconWrap>  
                 <InputText>Edit photo</InputText>
              </Label>
              <ErrorMessage name="file" />
              </InputWrap>
            ) }
            <Wrapper>
                <UserDataItem  type="text" name="name" onChange={handleChange} onSubmit={handleSubmit} label="Name: "  />
                <UserDataItem value={email} type="email" onChange={handleChange} name="email" onSubmit={handleSubmit} label="Email: " />
                <UserDataItem value={birthday} type="text" onChange={handleChange} name="birthday" onSubmit={handleSubmit} label="Birthday: "/>
                <UserDataItem value={phone} type="text" onChange={handleChange} name="phone" onSubmit={handleSubmit} label="Phone: "/>
                <UserDataItem value={city} type="text" onChange={handleChange} name="city" onSubmit={handleSubmit} label="City: "/>
            </Wrapper>
            </FormThumb>
         )}
          </Formik>
        </div>
    )
};

export default UserData;