import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import {ReactComponent as OutIcon} from '../../icons/logout.svg';

export const Icon = styled(OutIcon)`
fill: none;
`;

export const OutBtn = styled(Link)`
 cursor: pointer;
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
`;

export const OutText = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 1.37;
letter-spacing: 0.04em;
color: #888888;
`;