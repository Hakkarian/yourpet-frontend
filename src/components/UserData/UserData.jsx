//import PropTypes from 'prop-types';
import React, {useRef, useState} from "react";
//import {useSelector } from "react-redux";
import { Formik, ErrorMessage  } from "formik";
// import { useNavigate } from "react-router-dom";

// import { selectIsLoggedIn } from "redux/auth/auth-selector";
import { ImageDef, Input, InputWrap, IconWrap, InputText, Label, CameraIcon, FormThumb, CrossIcon, Wrapper, ErrorWrap} from "./UserData.styled";
//import { info } from "redux/auth/auth-operations";
import { userValidationSchema } from "./userValidation";
import UserDataItem from "components/UserDataItem";
import  UserImage  from '../UserImage';

const UserData = ({ name, birthday, email, phone, city}) => {
   //const dispatch = useDispatch();
  //  const navigate = useNavigate();
  //  const isLogin = useSelector(selectIsLoggedIn);
   const [photo, setPhoto] = useState(null);
   const fileRef = useRef(null);

  
  //  useEffect(() => {
  //    if(!isLogin) {
  //    navigate('/login');
  //    }
  //  }, [isLogin, navigate]);

   const handleSubmit = async(values, {setFieldError}) => {
    if(!photo) {
      await setFieldError('photo', 'Load avatar');
      return;
    }

    let formData = new FormData();
    formData.append('photo', photo);
    console.log(photo);
  };

    return (
        <div>
            <Formik 
            initialValues={{
              file: photo || null,
              name:name || '',
              email: email || '',
              birthday: birthday || '',
              phone: phone || '',
              city:city || '',
            }}
            validationSchema={userValidationSchema}
            onSubmit={handleSubmit}>
         {({values, setFieldValue, errors}) => (
            <FormThumb>
               {values.file ? 
                <UserImage file={values.file}/> : 
                 <ImageDef src={require("../../images/default-user-img.jpg")} 
                 alt="User" 
                 width="182px" 
                 height="182px"   
                 onClick={() => {fileRef.current.click() }}/>}
              {values.file ? (<InputWrap>
              <Input type="file" id="input__file" ref={fileRef} onChange={event => {
                  setFieldValue('file', event.target.files[0]); setPhoto(event.target.files[0]); console.log(event.target.files[0]);
              }}></Input>
              <Label htmlFor="input__file">
                <IconWrap><CrossIcon /></IconWrap>  
                 <InputText>Change photo</InputText>
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
              <ErrorWrap>
              <ErrorMessage name="file" />
              </ErrorWrap>
              </InputWrap>
            ) }
            <Wrapper>
                <UserDataItem  type="text" name="name" label="Name: "  />
                <UserDataItem  type="email" name="email" label="Email: "/>
                <UserDataItem  type="date" name="birthday" label="Birthday: "/>
                <UserDataItem  type="text" name="phone" label="Phone: "/>
                <UserDataItem  type="text" name="city" label="City: "/>
            </Wrapper>
            </FormThumb>
         )}
          </Formik>
        </div>
    )
};



export default UserData;