import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectUserAvatar,
  selectIsInputUpdated,
} from 'redux/auth/auth-selector';
import {
  InputP,
  Confirm,
  ConfirmButton,
  IconWrap,
  InputText,
  Label,
  CameraIcon,
  FormWrapper,
  CrossIcon,
  CustomLabel,
  FilePreview,
  StyledDiv,
  ButtonWrap,
} from './UserData.styled';
import { info, getUserInfo } from 'redux/auth/auth-operations';
import { CustomInput } from 'pages/AddPetPage/AddPetForm/FormFields/FileInput/FileInput.styled';
import { changeIsInputUpdatedStatus } from 'redux/auth/auth-slice';

const UserPhoto = () => {
  const dispatch = useDispatch();
  const [visibleSubmit, setVisibleSubmit] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!photo) {
      return;
    }
    let formData = new FormData();
    formData.append('avatar', photo);

    dispatch(info(formData)).catch(err => console.log(err));
    setVisibleSubmit(false);
  };

  const isAvatarReady = useSelector(selectIsInputUpdated);
  if (isAvatarReady) {
    dispatch(getUserInfo());
    dispatch(changeIsInputUpdatedStatus());
  }

  const [photo, setPhoto] = useState(null);
  const photoUrl = photo ? URL.createObjectURL(photo) : null;
  let avatarFromDB = useSelector(selectUserAvatar);
  // console.log('avatarFromDB', avatarFromDB);

  const handleChange = e => {
    if (e.currentTarget.files[0]) {
      setPhoto(e.currentTarget.files[0]);
      setVisibleSubmit(true);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <CustomLabel htmlFor="avatar_input">
        <FilePreview
          src={
            photoUrl
              ? photoUrl
              : avatarFromDB
              ? avatarFromDB
              : require('../../images/default-user-img.jpg')
          }
        />
      </CustomLabel>
      <div>
        <CustomInput
          type="file"
          name="avatar"
          id="avatar_input"
          onChange={handleChange}
        />
      </div>
      {!photoUrl && !avatarFromDB && (
        <StyledDiv>
          <Label htmlFor="avatar_input">
            <IconWrap>
              <CameraIcon />
            </IconWrap>
            <InputText>Edit photo</InputText>
          </Label>
        </StyledDiv>
      )}
      <ButtonWrap>
        {(photoUrl || avatarFromDB) && (
          <StyledDiv>
            <Label htmlFor="avatar_input">
              <IconWrap>
                <CrossIcon />
              </IconWrap>
              <InputText>Change photo</InputText>
            </Label>
          </StyledDiv>
        )}
        {photoUrl && visibleSubmit && (
          <StyledDiv>
            <ConfirmButton type="submit">
              <IconWrap>
                <Confirm />
              </IconWrap>
              <InputP>Confirm</InputP>
            </ConfirmButton>
          </StyledDiv>
        )}
      </ButtonWrap>
    </FormWrapper>
  );
};

export default UserPhoto;
