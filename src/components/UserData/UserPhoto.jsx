import React, { useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import defImg from '../../images/default-user-img.jpg';
import { selectUser } from 'redux/auth/auth-selector';
import { info } from 'redux/auth/auth-operations';
import { userPhotoValidationSchema } from './userValidation';
import { Input, Label, CameraIcon, Confirm, EditBtn, BtnWrap, CrossIcon,ImageBox, Image, Button } from './UserData.styled';

const UserPhoto = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const {avatar} = user;
    const [uploadedPhoto, setUploadedPhoto] = useState('');
    const [userAvatar, setUserAvatar] = useState(avatar || defImg);
    const [isSubmitted, setIsSubmitted] = useState(true);
    const [errors, setErrors] = useState({});
    const fileRef = useRef(null);
 
    const updateAvatar = async (data) => {
      try {
        const response = await dispatch(info(data));
        if (response.status === 200) {
      } return response.data;
      } catch (error) {
        return error.message;
      }
    };
  
    const handleSubmit = () => {
      const formDataSend = new FormData();
      formDataSend.append("avatar", uploadedPhoto);
      updateAvatar( formDataSend);
      setUserAvatar(avatar)
      setIsSubmitted(true);
    };

     const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        await userPhotoValidationSchema
        .validate({ avatar: file })
        .then(() => {
          setUserAvatar(null);
          setUploadedPhoto(file);
          setIsSubmitted(false);
          setErrors({});
        })
        .catch((error) => {
          setErrors({ uploadedPhoto: error.message });
        });
    }
  };

      const handlePreviewClick = () => {
      fileRef.current.click();
    };

  return (

    <div>
      <ImageBox>
          <Input
            ref={fileRef}
            type="file"
            id="avatar"
            onChange={handleFileChange}
          />
        <Label htmlFor="avatar"> 
            {uploadedPhoto ? (
              <Image
                src={URL.createObjectURL(uploadedPhoto)}
                alt="User avatar"
              />
            )
              :
            (<Image
                src={userAvatar}
                alt="User avatar"
              />)
            }
        </Label>
        {errors.uploadedPhoto && <p >{errors.uploadedPhoto}</p>}
      </ImageBox>
      
      {!userAvatar  &&(
        <BtnWrap>
          <Button type="submit" onClick={handleSubmit}>
            <Confirm />
            Confirm
          </Button>
          <Button type="button" onClick={handlePreviewClick} >
            <CrossIcon/>
            Change
          </Button>
          </BtnWrap>
      )}
      {(uploadedPhoto && isSubmitted) ? (
        <EditBtn type="button" onClick={handlePreviewClick}>
          <CameraIcon />
          Edit photo</EditBtn>
      ) : (
        !uploadedPhoto && <EditBtn type="button" onClick={handlePreviewClick} >
            <CameraIcon />
          Edit photo</EditBtn>
    )}
    </div>
  )
};
      
export default UserPhoto;