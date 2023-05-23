import React from "react";

import { FormThumb,  Wrapper, MainWrap} from "./UserData.styled";
import UserDataItem from "components/UserDataItem";
import UserPhoto from "./UserPhoto";

const UserData = () => {

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