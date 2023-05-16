import styled from '@emotion/styled';
import {ReactComponent as EditIcon} from '../../icons/edit-2.svg';

export const EditButton = styled.button`
position: absolute;
right: 8px;
top: 4px;
border: none;
background-color: transparent;
margin: 0;
padding: 0;
`;

export const Edit = styled(EditIcon)`
width: 24px;
height: 24px;
`;

export const Input = styled.input`
width: 190px;
margin-right: 8px;
height: 28px;
outline: 1px solid #54ADFF;
border: none;
border-radius: 20px;
padding: 4px 12px 4px 12px;
font-weight: 400;
font-size: 12px;
line-height: 1.33;
letter-spacing: 0.04em;
color: inherit;
`;

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 21px;
`;

export const Label = styled.label`
font-weight: 600;
font-size: 14px;
line-height: 1.35;
letter-spacing: 0.04em;   
color: #111111;
`;

export const InputWrap = styled.div`
width: 190px;

 @media screen and (min-width: 480px) {
    width: 300px;
 }
 @media screen and (min-width: 768px) {
    width: 255px;
 }
`;

export const ErrorBox = styled.div`
height: 12px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Error = styled.div`
font-size: 10px;
line-height: 1.33;
color: #F43F5E;;
`;