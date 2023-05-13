import React from 'react';


import { UserDiv } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';


const UserPage = () => {

  return (
    <UserDiv>
      <div>
        <UserData />
          <Logout/>
      </div>
      <PetsData />
    </UserDiv>
  );
};

export default UserPage;
