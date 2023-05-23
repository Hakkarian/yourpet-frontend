import React, { useEffect } from 'react';
import { fetchFriends } from 'redux/friends/friends-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllFriends, selectIsLoading, selectError } from "redux/friends/friends-selector"
import { Cointainer } from "./OurFriendsPage.styled"
import ReusableTitle from '../../shared/components/ReusableTitle';
import { Loader } from 'components/Loader';
import FriendsList from 'components/OurFriends/FriensList/FriendsList';

const OurFriendsPage = () => {

  const dispatch = useDispatch();
  const allFriends = useSelector(selectAllFriends)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Cointainer>

      <ReusableTitle>Our Friend</ReusableTitle>
      {isLoading && !error && <Loader />}
      {error && <p>Somthing wrong</p>}

      <FriendsList friend={allFriends} />

    </Cointainer>

  )
}

export default OurFriendsPage;
