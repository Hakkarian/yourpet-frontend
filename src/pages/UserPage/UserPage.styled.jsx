import styled from "@emotion/styled";

export const MainBox = styled.div`
@media screen and (min-width: 1280px) {
  display: flex;
  flex-direction: column;
}
`;

export const Wrap = styled.div`
padding-top: 20px;
padding-bottom: 25px;
padding-right: 8px;
padding-left: 8px;
background: #FFFFFF;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 20px;

@media screen and (min-width: 768px and max-width: 1200px) {
  flex-direction: row-reverse;
  padding: 20px 76px 20px 20px;
  gap: 71px;
  border-radius: 40px;
}

@media screen and (min-width: 1280px) {
  flex-direction: column;
  border-radius: 40px;
  width: 395px;
  gap: 0;
}
`;

export const Title = styled.h2`
font-size: 20px;
font-weight: 500;
color: #000000;
letter-spacing: 0.04em;
line-height: 1.35;
margin-bottom:18px;

@media screen and (min-width: 768px) {
  font-size: 28px;
  color: #111111;
  margin-bottom: 24px;
}
`;

export const UserDiv = styled.div`
  background-color: #FEF9F9;  margin-top: 40px;
  margin-bottom: 137px;
  @media screen and (min-width: 768px) {
    margin-bottom: 121px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
`;



