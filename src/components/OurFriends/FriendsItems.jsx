// import friends from "./friends"
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from 'redux/friends/friends-operations';
import { selectAllFriends } from "redux/friends/friends-selector"
import {
   WrapperOurFriends, NameCompany, WrapperForImgAndInformation, WrapperImage,
   LogoCompanyImg, WrapperInformation, ListInformation, ItemInformation, LinKForInformation,
   NameTextinformation, Textinformation, ModalPosition, ModalList, ModalItem, ModalNameDay, ModalTimeWork
} from "./FriendsItems.styled"

const FriendsItems = () => {
   // const [friendsState] = useState(friends)
   const [visible, setVisible] = useState(false);
   const dispatch = useDispatch();
   const allFriends = useSelector(selectAllFriends)
   console.log("Запит на бекенд all friend----->", allFriends)


   useEffect(() => {
      dispatch(fetchFriends());
   }, [dispatch]);

   const onClickStart = (_id, event) => {
      const userName = event.currentTarget.name
      console.log("time?.isOnline", _id, userName)
      setVisible(!visible)
   }

   const contactList = allFriends.map(({ _id, title, imageUrl, address, addressUrl, phone, time, url, email, emailUrl, phoneUrl }) =>
      <WrapperOurFriends key={_id}>

         <NameCompany href={url} target="_ blank" >{title}</NameCompany>

         <WrapperForImgAndInformation>
            <WrapperImage>
               <LogoCompanyImg src={imageUrl} alt="Logo company" />
            </WrapperImage>
            <WrapperInformation>
               <ListInformation>

                  <ItemInformation>
                     <LinKForInformation name={title} onClick={(event) => onClickStart(_id, event)}>
                        {/* {time?.isOnline && <ModalPosition></ModalPosition>} */}
                        {visible && time?.isOnline && < ModalPosition  >
                           <ModalList>
                              <ModalItem><ModalNameDay >MN</ModalNameDay><ModalTimeWork>{time?.monday}</ModalTimeWork></ModalItem>
                              <ModalItem><ModalNameDay >TU</ModalNameDay ><ModalTimeWork>{time?.tuesday}</ModalTimeWork></ModalItem>
                              <ModalItem><ModalNameDay >WE</ModalNameDay ><ModalTimeWork>{time?.wednesday}</ModalTimeWork></ModalItem>
                              <ModalItem><ModalNameDay >TH</ModalNameDay ><ModalTimeWork>{time?.thursday}</ModalTimeWork></ModalItem>
                              <ModalItem><ModalNameDay >FR</ModalNameDay ><ModalTimeWork>{time?.friday}</ModalTimeWork></ModalItem>
                              <ModalItem><ModalNameDay >SA</ModalNameDay ><ModalTimeWork>{time?.saturday}</ModalTimeWork></ModalItem>
                              <ModalItem><ModalNameDay >SU</ModalNameDay ><ModalTimeWork>{time?.sunday}</ModalTimeWork></ModalItem>
                           </ModalList>
                        </ModalPosition>}

                        <NameTextinformation>Time:</NameTextinformation>
                        <Textinformation>{time?.times}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

                  <ItemInformation>
                     <LinKForInformation href={addressUrl} target="_ blank">
                        <NameTextinformation>Address:</NameTextinformation>
                        <Textinformation>{address}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

                  <ItemInformation>
                     <LinKForInformation href={emailUrl} >
                        <NameTextinformation>Email:</NameTextinformation>
                        <Textinformation>{email}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

                  <ItemInformation>
                     <LinKForInformation href={phoneUrl}>
                        <NameTextinformation>Phone:</NameTextinformation>
                        <Textinformation>{phone}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

               </ListInformation>
            </WrapperInformation>

         </WrapperForImgAndInformation>

      </WrapperOurFriends>)
   return (
      <>{contactList}</>
   )
}

export default FriendsItems;