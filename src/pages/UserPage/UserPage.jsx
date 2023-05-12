import React from 'react'

import { Wrap, UserDiv, Title } from './UserPage.styled';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import Logout from 'components/Logout';

const UserPage = () => {
  return (
    <UserDiv>
       <Title>My information:</Title>
      <Wrap>
      <UserData />
      <Logout />
      </Wrap>
      <PetsData />
    </UserDiv>
  )
}

export default UserPage;