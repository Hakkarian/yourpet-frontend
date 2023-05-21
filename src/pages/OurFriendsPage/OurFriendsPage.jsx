import React, { useEffect } from 'react';
import { fetchFriends } from 'redux/friends/friends-operations';
import { useDispatch ,useSelector } from 'react-redux';
import { selectAllFriends , selectIsLoading , selectError } from "redux/friends/friends-selector"
import FriendsItems from '../../components/OurFriends/FriendsItems';
import { OurFriend, Cointainer, ListOurFriends } from "./OurFriendsPage.styled"
import { Loader } from 'components/Loader';


const OurFriendsPage = () => {
  
  const dispatch = useDispatch();
  const allFriends = useSelector(selectAllFriends)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFriends());
   }, [dispatch]);


  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <p>Somthing wrong</p>}

      {!isLoading && allFriends.length !== 0 &&
      <Cointainer>
        <OurFriend>Our Friend</OurFriend>
        <ListOurFriends>
          <FriendsItems friend={allFriends} />
        </ListOurFriends>
      </Cointainer>}
    </>
  )
}

export default OurFriendsPage;
