import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFriends } from 'redux/friends/friends-operations';

import {
  selectAllFriends,
  selectIsLoading,
  selectError,
} from 'redux/friends/friends-selector';

import { Loader } from 'components/Loader';
// import { Container } from 'shared/components/Container/Container.styled';
import { Container } from 'shared/components/Container/Container.styled';
import ReusableTitle from '../../shared/components/ReusableTitle';
// import FriendsItems from '../../components/OurFriends/FriendsItems';
import { OurFriendsList } from 'components/OurFriends/OurFriendsFix/OurFriendsList/OurFriendsList';
// import { OurFriend, ListOurFriends } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const friendsItems = useSelector(selectAllFriends);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <Container>
        {/* <OurFriend>Our Friend</OurFriend> */}
        <ReusableTitle>Our Friend</ReusableTitle>
        {isLoading && !error && <Loader />}
        {error && <p>Somthing wrong</p>}
        <OurFriendsList friends={friendsItems} />
      </Container>
    </>
  );
};

export default OurFriendsPage;
