import React from 'react';
import { useState } from 'react';
import { OurFriend, Cointainer, WrapperOurFriends, WrapperImage, LogoCompanyImg, WrapperInformation, NameCompany, WrapperForImgAndInformation, ListInformation, ItemInformation, NameTextinformation, Textinformation, ListOurFriends, LinKForInformation, ModalPosition, ModalNameDay, ModalTimeWork , ModalList , ModalItem } from "./OurFriendsPage.styled"
import friends from "./friends"

const OurFriendsPage = () => {
  const [visible, setVisible] = useState(false);
  console.log(visible)
  //  const date = new Date().toDateString().slice(0,-12)
  // console.log(date)

  // const options = {weekday: 'long'};
  // const data=new Date().toLocaleString("en-US", options).slice(0,-4).toLocaleUpperCase();
  // if("MO"===data)return console.log("success")
  // else console.log('error')

  const contactList = friends.map(({ id, name, avatar, address, phone, time, link, email, linkEmail, linkPhone, linkAdress }) =>
    <WrapperOurFriends key={id}>

      <NameCompany href={link} target="_ blank" >
        {name}
      </NameCompany>
      <WrapperForImgAndInformation>
        <WrapperImage>
          <LogoCompanyImg src={avatar} alt="Logo company"/>
        </WrapperImage>
        <WrapperInformation>
          <ListInformation>
            <ItemInformation>
              <LinKForInformation onClick={(event) => setVisible(!visible)} >
                {/* visibility : {!visible ? "hidden" : "showing"} */}
                   
                {visible && <ModalPosition  >
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
              <LinKForInformation href={linkAdress} target="_ blank">
                <NameTextinformation>Address:</NameTextinformation>
                <Textinformation>{address}</Textinformation>
              </LinKForInformation>
            </ItemInformation>

            <ItemInformation>
              <LinKForInformation href={linkEmail} >
                <NameTextinformation>Email:</NameTextinformation>
                <Textinformation>{email}</Textinformation>
              </LinKForInformation>
            </ItemInformation>

            <ItemInformation>
              <LinKForInformation href={linkPhone}>
                <NameTextinformation>Phone:</NameTextinformation>
                <Textinformation>{phone}</Textinformation>
              </LinKForInformation>
            </ItemInformation>

          </ListInformation>

        </WrapperInformation>
      </WrapperForImgAndInformation>

    </WrapperOurFriends>
  )

  return (
    <>
      <Cointainer>

        <OurFriend>Our Friend</OurFriend>

        <ListOurFriends> {contactList}</ListOurFriends>

      </Cointainer>
    </>
  )
}

export default OurFriendsPage;

// не видяляйте це, я тут відкриваю модалку

// import Modal from 'shared/components/Modal/Modal';
// import ModalDelete from 'components/ModalDelete';
// // import ModalCongrats from 'components/ModalCongrats';
// // import ModalLogOut from 'components/ModalLogOut';

// import { useToggle } from 'shared/hooks/useToggle';
// import ModalNotice from 'components/ModalNotice';

// const OurFriendsPage = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <div>
//       OurFriendsPage

//     <button type="button" onClick={open}>
//   open modal
// </button>
// {isOpen &&         (<Modal onClose={close} >
          
//           {/* <ModalCongrats onClose={close}/> */}

         
//           <ModalDelete onClose={close} />

//           {/* <ModalLogOut onClose={close}/> */}

//           {/* <ModalNotice onClose={close} /> */}

//         </Modal>)}
// </div>
//   );
// };
   

    //   )}
    // </div>

// {/* <div>



// (<ModalNotice onClose={close}
