import React from "react";

import { Title, UserImage, ImgDiv, UserInfoWrap, Icon, ImgInput, IconWrap, InfoP } from "./UserData.styled";


const UserData = () => {


    return (
        <div>
            <Title>My information:</Title>
            <UserInfoWrap>
            <ImgDiv>
                <UserImage src={require("../../images/default-user-img.jpg")} alt="User"/>
                <IconWrap>
                <Icon src={require("../../icons/camera.png")} alt="camera"/>
                <ImgInput type="file" ></ImgInput>
                </IconWrap>
                <ul>
                    <li>
                        <InfoP>Name:</InfoP>
                    </li>
                    <li>
                        <InfoP>Email:</InfoP>
                    </li>
                    <li>
                        <InfoP>Birthday:</InfoP>
                    </li>
                    <li>
                        <InfoP>Phone:</InfoP>
                    </li>
                    <li>
                        <InfoP>City:</InfoP>
                    </li>
                </ul>
            </ImgDiv>
            </UserInfoWrap>
        </div>
    )
};

export default UserData;