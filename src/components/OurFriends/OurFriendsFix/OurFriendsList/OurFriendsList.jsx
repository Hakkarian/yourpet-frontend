// import PropTypes from 'prop-types';

import { OurFriendsItem } from '../OurFriendsItem/OurFriendsItem';
import { List } from './OurFriendsList.styled';

export const OurFriendsList = ({ friends }) => {
  console.log('friendslist--->', friends);
  return (
    <List>
      {friends.map(
        ({
          _id,
          title,
          url,
          addressUrl,
          imageUrl,
          address,
          workDays,
          phone,
          email,
        }) => (
          <OurFriendsItem
            key={_id}
            title={title}
            url={url}
            addressUrl={addressUrl}
            imageUrl={imageUrl}
            address={address}
            workDays={workDays}
            phone={phone}
            email={email}
          />
        )
      )}
    </List>
  );
};
