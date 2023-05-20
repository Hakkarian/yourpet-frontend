import React, { useState } from 'react';
import { titleName, worksTime } from './friends'
import {
   WrapperOurFriends, NameCompany, WrapperForImgAndInformation, WrapperImage,
   LogoCompanyImg, WrapperInformation, ListInformation, ItemInformation, LinKForInformation,
   NameTextinformation, Textinformation, ModalPosition, ModalList, ModalItem, ModalNameDay, ModalTimeWork,

} from "./FriendsItems.styled"

const FriendsItems = ({ friend }) => {
   const [friendsState, setFriendState] = useState([...friend])
   const [visible, setVisible] = useState(false);

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

         <NameCompany href={url} target="_ blank">{title.length < 15 ? title : titleName(title)}
         </NameCompany>

         <WrapperForImgAndInformation>
            <WrapperImage>
               <LogoCompanyImg src={imageUrl ? imageUrl : "https://i.ibb.co/kqpsyG0/cat-baby-787084-640.jpg"} alt="Logo company" />
            </WrapperImage>
            <WrapperInformation>
               <ListInformation>

                  <ItemInformation>
                     <LinKForInformation onClick={(event) => onShowModal(_id, event)}>

                        {visible && workDays !== null && < ModalPosition >
                           <ModalList> {workDays !== null && workDays.map(days =>
                              <ModalItem key={days._id}>
                                 <ModalNameDay>MO</ModalNameDay> <ModalTimeWork>{days.from}-{days.to}</ModalTimeWork>
                              </ModalItem>)}
                           </ModalList>

                        </ModalPosition>}

                        <NameTextinformation>Time:</NameTextinformation>
                        <Textinformation>{workDays !== null && workDays !== [] ? worksTime(_id) : 'day and night'}</Textinformation>
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