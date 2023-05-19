import FriendsItems from '../../components/OurFriends/FriendsItems';
import { OurFriend, Cointainer, ListOurFriends } from "./OurFriendsPage.styled"

const OurFriendsPage = () => {
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
