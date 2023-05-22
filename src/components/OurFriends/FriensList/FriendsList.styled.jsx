import styled from "@emotion/styled";

export const FriendList = styled.ul`
display: grid;
gap: 20px;
padding:0;
justify-items: center;
@media screen and (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  row-gap: 24px;
 }
 @media screen and (min-width: 1280px) {
  grid-template-columns: 1fr 1fr 1fr;
  gap:32px;
 }
`;



