//import React, {useRef, useState, useEffect} from "react";
//import { useDispatch, useSelector} from "react-redux";

// import {selectUser } from "redux/auth/auth-selector";
import { FormThumb,  Wrapper, MainWrap} from "./UserData.styled";
// import { info } from "redux/auth/auth-operations";
import UserDataItem from "components/UserDataItem";
import UserPhoto from "./UserPhoto";

// const initialState = {
//   name: '',
//   email: '',
//   birthday: '',
//   phone: '',
//   city: '',
//   photo: null,
// };

const UserData = ({handleSubmit}) => {
  // const [user, setUser] = useState(initialState);
  // const [isConfirm, setIsConfirm] = useState(false);
  //  const dispatch = useDispatch();
  //  const fileRef = useRef(null);
  //  const userData = useSelector(selectUser);

  //  const { avatar} = userData;

  // const selectHandler = (event) => {
  //   setUser({ ...user, avatar: event.target.files[0]});
  //   setIsConfirm(true);
  //  };

  // useEffect(() => {
  //   const updateAvatar = () => {
  //     if(avatar) {
  //     setUser({...user, photo: avatar});
  //     }
  //   };
  //   updateAvatar();
  // }, [avatar, user]);

  //  const handleChangeFile =(event) => {
  //   event.preventDefault();
  //     const data = new FormData();
  //    const av = URL.createObjectURL(event.target.files[0]);
     
  //   data.append('avatar', event.target.files[0]);
  //   setUser({...user, avatar : av});
  //   dispatch(info(data));
  //   setIsConfirm(false);
  //   };

    return (
        <MainWrap>
            <FormThumb>
              <UserPhoto />
         </FormThumb>
            <Wrapper>
            <UserDataItem  />
            </Wrapper>
        </MainWrap>
    )
};

export default UserData;