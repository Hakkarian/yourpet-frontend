
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllFriends } from "redux/friends/friends-selector"
import {
   WrapperOurFriends, NameCompany, WrapperForImgAndInformation, WrapperImage,
   LogoCompanyImg, WrapperInformation, ListInformation, ItemInformation, LinKForInformation,
   NameTextinformation, Textinformation, ModalPosition, ModalList, ModalItem, ModalNameDay, ModalTimeWork,

} from "./FriendsItems.styled"

const FriendsItems = ({friend}) => {
   const [friendsState, setFriendState] = useState([...friend])
   const [visible, setVisible] = useState(false);
   // console.log("allFriends", friendsState)

   onkeydown = (evt) => {
      if (evt.key === "Escape") {
         setVisible(false)
       }
   }

   const onShowModal = (id, event) => {
      setVisible(!visible)
      // const all = friendsState.filter(friends=>friends._id===id)
   }

   const contactList = friendsState.map(({ _id, title, imageUrl, address, addressUrl, phone, email, url, emailUrl, phoneUrl, workDays }) =>
      <WrapperOurFriends key={_id}>

         <NameCompany href={url} target="_ blank">{title.length < 15 ? title : "Company"}</NameCompany>

         <WrapperForImgAndInformation>
            <WrapperImage>
               <LogoCompanyImg src={imageUrl?imageUrl:"https://pixabay.com/get/ga9915c0f9b273695afa50b8563c6d2c99a76618cec35dae8a92bfbf7ac69cdeeef55de817ed2b60db7f43e3182ae530a_640.jpg"} alt="Logo company" />
            </WrapperImage>
            <WrapperInformation>
               <ListInformation>

                  <ItemInformation>
                     <LinKForInformation onClick={(event) => onShowModal(_id, event)}>

                        {visible &&workDays!== null && < ModalPosition >
                           <ModalList> {workDays !== null && workDays.map(days =>
                              <ModalItem key={days._id}>
                                 <ModalNameDay ></ModalNameDay ><ModalTimeWork>{days.from}-{days.to}</ModalTimeWork>
                              </ModalItem>)}
                           </ModalList>
                           
                        </ModalPosition>}

                        <NameTextinformation>Time:</NameTextinformation>
                        <Textinformation>{workDays !== null && workDays !== [] ? '10:00-18:00' : 'day and night'}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

                  <ItemInformation>
                     <LinKForInformation href={addressUrl} target="_ blank">
                        <NameTextinformation>Address:</NameTextinformation>
                        <Textinformation>{address !== null ? address : "website only"}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

                  <ItemInformation>
                     <LinKForInformation href={emailUrl} >
                        <NameTextinformation>Email:</NameTextinformation>
                        <Textinformation>{email ? email : "website only"}</Textinformation>
                     </LinKForInformation>
                  </ItemInformation>

                  <ItemInformation>
                     <LinKForInformation href={phoneUrl}>
                        <NameTextinformation>Phone:</NameTextinformation>
                        <Textinformation>{phone !== null ? phone : "email only"}</Textinformation>
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