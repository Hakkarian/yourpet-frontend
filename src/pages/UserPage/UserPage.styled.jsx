import styled from "@emotion/styled";

export const Wrap = styled.div`
padding-top: 20px;
width: 100%;
background: #FFFFFF;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 20px;

@media screen and (min-width: 768px) {
  flex-direction: row-reverse;
  padding: 20px 76px 20px 20px;
  gap: 71px;
  border-radius: 40px;
}

@media screen and (min-width: 1280px) {
  flex-direction: column;
  padding: 20px 24px 20px 16px;
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
`;

export const UserDiv = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #FEF9F9;
`;

export const ModalTitle = styled.h2`
margin-top: 109px;
margin-bottom: 52px;
font-weight: 500;
font-size: 36px;
letter-spacing: 0.04em;
color: ${({theme}) => theme.colors.black};
`
