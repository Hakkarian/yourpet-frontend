import styled from "@emotion/styled";
import {ReactComponent as Camera} from '../../icons/camera.svg';
import { Form } from "formik";
// import { theme } from "constants/theme";

export const FormThumb = styled(Form)`
`;

export const CheckWrap = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const CheckBtn = styled.button`
 cursor: pointer;
 border: none;
 background-color: transparent;
`;

export const ImgDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const UserImage = styled.img`
 width: 182px;
 height: 182px;
 border-radius: 40px;
 margin-bottom: 15px;
`;

export const Icon = styled.img`
color: #54ADFF;
width: 24px;
height: 24px;
margin-right: 12px;
`;

export const Input = styled.input`
opacity: 0;
visibility: hidden;
position: absolute;
`;

export const InputWrap = styled.div`
display: flex;
width: 100%;
position: relative;
align-items: center;
text-align: center;
margin-bottom: 24px;
`;

export const InputText = styled.span`
font-size: 12px;
line-height: 1.83;
letter-spacing: 0.04em;
color: #111111;
`;

export const IconWrap = styled.span`
width:24px;
height: 24px;
margin-right: 12px;
`;

export const Label = styled.label`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin: 0 auto;
`;

export const CameraIcon = styled(Camera)`
width: 24px;
height: 24px;
color: 
`;