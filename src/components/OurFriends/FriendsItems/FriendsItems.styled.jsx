import styled from "@emotion/styled";

export const FriendsItem = styled.li`
box-sizing: border-box;
background: #FFFFFF;
width: 280px;
height: 239px;
position: relative;
background-color: inherit;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
padding:16px 0  ;
@media screen and (min-width: 768px) {
  width: 336px;
  height: 275px;
 }
 @media screen and (min-width: 1280px) {
  width: 395px;
  height: 287px;
 }
`
export const Title = styled.a`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 27px;
height: 27px;
padding:0;
display: flex;
align-items: center;
justify-content: center;
color: #54ADFF;
@media screen and (min-width: 768px) {

 }
 @media screen and (min-width: 1280px) {
 
 }
`
export const WrapperForImgAndInformation = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: start;
padding: 16px 0;

`
export const WrapperImage = styled.div`
width: 100px;
height: 68px;
margin: 0 12px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 768px) {
  width: 124px;
  height: 88px;
 }
 @media screen and (min-width: 1280px) {
  margin: 0 20px 0 12px;
  width: 146px;
  height: 104px;
 }
`
export const LogoCompanyImg = styled.img`
width: 100%;
height: 100%;

@media screen and (min-width: 768px) {
  width: 124px;
  height: 88px;
 }
 @media screen and (min-width: 1280px) {
  width: 146px;
  height: 104px;
 }
`
export const WrapperInformation = styled.div`
margin:0;
`
export const ListInformation = styled.ul`
padding: 0 ;
display: grid;
gap: 12px;
margin: 0;
@media screen and (min-width: 768px) {
  gap: 16px;
 }
 @media screen and (min-width: 1280px) {
  gap: 12px;
 }
`
export const ItemInformation = styled.li`
margin:0;
height: 32px;
overflow: hidden;
@media screen and (min-width: 768px) {
  height: 38px;
 }
 @media screen and (min-width: 1280px) {
  height: 44px;
 }
`
export const WrapTime = styled.li`
margin:0;
height: 32px;
@media screen and (min-width: 768px) {
  height: 38px;
 }
 @media screen and (min-width: 1280px) {
  height: 44px;
 }
`
export const TimeTtext = styled.p`

  margin:0;
  font-family: system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: inherit;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
   }
   @media screen and (min-width: 1280px) {
   font-size: 16px;
  line-height: 22px;
   }
  
`
export const LinKForInformation = styled.a`
padding:0;
margin:0;
width: fit-content;
color: #111111;
&:hover {
  color:#54ADFF;
   cursor:pointer;
 },

`
export const NameTextinformation = styled.p`
margin:0;
font-family: 'Manrope';
// font-family: system-ui;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: inherit;
@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 19px;
 }
 @media screen and (min-width: 1280px) {
  font-size: 16px;
line-height: 22px;
 }
`
export const Textinformation = styled.div`
margin:0;
// font-family: 'Manrope';
font-family: system-ui;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: inherit;
@media screen and (min-width: 768px) {
  font-size: 14px;
  line-height: 19px;
 }
 @media screen and (min-width: 1280px) {
 font-size: 16px;
line-height: 22px;
 }
`






