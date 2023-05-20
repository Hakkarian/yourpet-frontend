import React, { useEffect } from 'react';
import { fetchFriends } from 'redux/friends/friends-operations';
import { useDispatch} from 'react-redux';
import FriendsItems from '../../components/OurFriends/FriendsItems';
import { OurFriend, Cointainer, ListOurFriends } from "./OurFriendsPage.styled"

const OurFriendsPage = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
   }, [dispatch]);


  return (
    <>
      <Cointainer>
        <OurFriend>Our Friend</OurFriend>
        <ListOurFriends>
          <FriendsItems />
        </ListOurFriends>
      </Cointainer>
    </>
  )
}

export default OurFriendsPage;
