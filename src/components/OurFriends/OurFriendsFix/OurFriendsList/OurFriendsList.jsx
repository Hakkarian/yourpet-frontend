import PropTypes from 'prop-types';

import { OurFriendsItem } from '../OurFriendsItem/OurFriendsItem';
import { List } from './OurFriendsList.styled';

export const OurFriendsList = ({ friends }) => {
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

OurFriendsList.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  addressUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      from: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  email: PropTypes.string,
  phone: PropTypes.string,
};
