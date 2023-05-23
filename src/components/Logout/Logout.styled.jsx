import styled from "@emotion/styled";
import {ReactComponent as OutIcon} from '../../icons/logout.svg';

export const Icon = styled(OutIcon)`
stroke: #54ADFF;
fill: none;
width: 24px;
height: 24px;
`;

export const OutBtn = styled.button`
 cursor: pointer;
 display: flex;
 align-items: center;
 border: none;
 background-color: transparent;
 width: 24px;
 height: 24px;
 margin-right: 16px;
`;

export const OutWrap = styled.div`
 margin-top: 30px;
 display: flex;
 align-items: center;

 @media screen and (min-width: 768px){
    margin: 13px 0px 0px;
   };
`;

export const OutText = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 1.37;
letter-spacing: 0.04em;
color: #888888;
`;