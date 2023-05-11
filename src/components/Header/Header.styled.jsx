import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const HeaderCss = styled.header`
    height: ${({theme}) => theme.spacing(15)}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AuthWrapCss = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 42px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const UserWrapCss = styled.div`
  @media screen and (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    gap: 12px;
  }
`;

export const InfoCss = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;