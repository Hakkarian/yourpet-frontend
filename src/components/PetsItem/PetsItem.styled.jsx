import styled from "@emotion/styled";
import {ReactComponent as DeleteIcon} from '../../icons/trash.svg';

export const InfoWrap = styled.div`
@media screen and (min-width: 768px) {
padding-top:20px;
}
`;

export const InfoTitle = styled.p`
font-weight: 700;
margin-bottom: 16px;
`;

export const PetImg = styled.img`
align-self: center;
width: 240px;
height: 240px;
background: #54adff;
border-radius: 20px;
margin: 20px 0;

@media screen and (min-width: 768px) {
  width: 128px;
  height: 128px;
  margin-right: 20px;
  margin-bottom: 108px;
  align-self: flex-start;
}
@media screen and (min-width: 1280px) {
  margin-bottom: 31px;
`;

export const Icon = styled(DeleteIcon)`
fill: #54ADFF; 
width: 24px;
height: 24px;
`;

export const Item = styled.li`
width: 100%;
height: auto;
background: #ffffff;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 20px;
padding-left: 20px;
padding-right: 20px;
margin-top: 18px;
display: flex;
flex-direction: column;

@media screen and (min-width: 768px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}

@media screen and (min-width: 1280px) {
  margin-left: 32px;
}
`;

export const DeleteBtn = styled.button`
cursor:pointer;
border: none;
background-color: transparent;
width: 24px;
height: 24px;
`;

export const Span = styled.span`
font-size: 14px;
line-height: 1.57;
color: #000000;
font-weight: 400;
font-family: 'Manrope';
font-style: normal;
letter-spacing: 0.04em;
`;

export const BtnWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0;
padding: 0;
`; 