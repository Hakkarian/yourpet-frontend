import styled from "@emotion/styled";

export const Cointainer = styled.div`
font-family: 'Manrope';
font-style: normal;
padding:40px 0 75px;
@media screen and (min-width: 768px) {
   padding:80px 0 204px;
  }
  @media screen and (min-width: 1280px) {
   padding:80px 0 81px;
  }
`;
export const OurFriend = styled.h2`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
text-align: center;
color: #000000;
margin:0;

  @media screen and (min-width: 768px) {
   font-size: 48px;
   line-height: 66px;
  }
  @media screen and (min-width: 1280px) {
   font-size: 48px;
   line-height: 66px;
  }
`;
export const ListOurFriends = styled.ul`
margin-top:24px;
display: grid;
gap: 20px;
padding:0;
justify-items: center;
@media screen and (min-width: 768px) {
  margin-top:40px;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  row-gap: 24px;
 }
 @media screen and (min-width: 1280px) {
  margin-top:60px;
  grid-template-columns: 1fr 1fr 1fr;
  gap:32px;
 }

`