import FriendsItem from '../FriendsItems/FriendsItems';
import { FriendList,  } from './FriendsList.styled'

const FriendsList = ({ friend }) => {

   return (
      <FriendList>
         {friend.map(({ _id, title, url, addressUrl, imageUrl, address,
            workDays, phone,  email}) => (
               
            <FriendsItem
               key={_id}
               _id={_id}
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
      </FriendList>
   );
};

export default FriendsList;



