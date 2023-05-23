
import { titleName , adresName} from './friends'
import { Schedule } from '../Schedule/Schedule';
import {
   FriendsItem, Title, WrapperForImgAndInformation, WrapperImage,WrapTime,
   LogoCompanyImg, WrapperInformation, ListInformation, ItemInformation, LinKForInformation,
   NameTextinformation, Textinformation , TimeTtext

} from "./FriendsItems.styled"

const FriendsItems = ({ title, url, addressUrl, imageUrl, address, workDays, phone, email }) => {

   return (
      <>
         <FriendsItem >
            <Title href={url} loading="lazy" rel="noopener nofollow" target="_ blank">
               {title.length < 15 ? title : titleName(title)}
            </Title>

            <WrapperForImgAndInformation>
               <WrapperImage>
                  <LogoCompanyImg src={imageUrl ?? "https://i.ibb.co/kqpsyG0/cat-baby-787084-640.jpg"} alt="Logo company" />
               </WrapperImage>
               <WrapperInformation>
                  <ListInformation>

                     <WrapTime>
                        <NameTextinformation>Time:</NameTextinformation>
                        {workDays?.length ? (
                           <Schedule workDays={workDays} />) :
                            ( <TimeTtext>day and night</TimeTtext>
                        )}
                     </WrapTime>

                     <ItemInformation>
                        <LinKForInformation href={addressUrl} target="_ blank">
                           <NameTextinformation>Address:</NameTextinformation>
                           <Textinformation>{address !== null ? adresName(title) : "website only"}</Textinformation>
                        </LinKForInformation>
                     </ItemInformation>

                     <ItemInformation>
                        <LinKForInformation href={email && 'mailto:' + email} >
                           <NameTextinformation>Email:</NameTextinformation>
                           <Textinformation>{email ? email : "website only"}</Textinformation>
                        </LinKForInformation>
                     </ItemInformation>

                     <ItemInformation>
                        <LinKForInformation href={phone && 'tel:' + phone}>
                           <NameTextinformation>Phone:</NameTextinformation>
                           <Textinformation>{phone !== null ? phone : "email only"}</Textinformation>
                        </LinKForInformation>
                     </ItemInformation>

                  </ListInformation>
               </WrapperInformation>

            </WrapperForImgAndInformation>
         </FriendsItem>
      </>
   )
}

export default FriendsItems;