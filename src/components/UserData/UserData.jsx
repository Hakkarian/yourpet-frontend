import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selector';
import {
  ImageDef,
  InputP,
  SelectWrap,
  Confirm,
  ConfirmBtn,
  Input,
  InputWrap,
  IconWrap,
  InputText,
  Label,
  CameraIcon,
  FormThumb,
  CrossIcon,
  Wrapper,
  MainWrap,
} from './UserData.styled';
import { info } from 'redux/auth/auth-operations';
import UserDataItem from 'components/UserDataItem';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
  photo: null,
};

const UserData = () => {
  const [user, setUser] = useState(initialState);
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const userData = useSelector(selectUser);
  console.log(userData.avatar);

  //  const { avatar} = userData;

  const selectHandler = event => {
    setUser({ ...user });
    setIsConfirm(true);
  };

  // useEffect(() => {
  //   const updateAvatar = () => {
  //     if(avatar) {
  //     setUser({...user, photo: avatar});
  //     }
  //   };
  //   updateAvatar();
  // }, [avatar, user]);

  const handleChangeFile = event => {
    event.preventDefault();
    const data = new FormData();
    const av = URL.createObjectURL(event.target.files[0]);

    data.append('image', event.target.files[0]);
    setUser({ ...user, avatar: av });
    dispatch(info(data));

    //   event.preventDefault();

    //  let formData = new FormData();
    //  formData.append("avatar", user.photo)
    //  dispatch(info(formData));
    //  setIsConfirm(false);
  };

  return (
    <MainWrap>
      <FormThumb onSubmit={handleChangeFile}>
        {user.photo ? (
          <ImageDef src={user.photo} alt="User" />
        ) : (
          <ImageDef
            src={require('../../images/default-user-img.jpg')}
            alt="User"
            width="182px"
            height="182px"
            onClick={() => {
              fileRef.current.click();
            }}
          />
        )}

        {!isConfirm ? (
          <InputWrap>
            <Input
              accept="image/png, image/jpeg"
              type="file"
              name="avatar"
              id="input__file"
              ref={fileRef}
              onChange={selectHandler}
            />
            <Label htmlFor="input__file">
              <IconWrap>
                <CameraIcon />
              </IconWrap>
              <InputText>Edit photo</InputText>
            </Label>
          </InputWrap>
        ) : (
          <SelectWrap>
            <Input
              type="file"
              name="avatar"
              id="input__file"
              ref={fileRef}
              onChange={selectHandler}
            ></Input>
            <Label htmlFor="input__file">
              <IconWrap>
                <CrossIcon />
              </IconWrap>
              <InputText>Change photo</InputText>
            </Label>
            <ConfirmBtn type="submit">
              <IconWrap>
                <Confirm />
              </IconWrap>
              <InputP>Confirm</InputP>
            </ConfirmBtn>
          </SelectWrap>
        )}
      </FormThumb>
      <Wrapper>
        <UserDataItem />
      </Wrapper>
    </MainWrap>
  );
};

export default UserData;
