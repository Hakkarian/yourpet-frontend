import styled from '@emotion/styled';

import { ReactComponent as User } from '../../icons/user.svg';

export const HeaderCss = styled.header`
  height: ${({ theme }) => theme.spacing(19)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthWrapCss = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    gap: 42px;
  }
`;

export const UserWrapCss = styled.div`
  @media screen and (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  svg path {
    transition: stroke 250ms linear;
    
    &:hover,
    &:focus {
      stroke: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const InfoCss = styled.p`
  color: ${({theme})=>theme.colors.black};
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const NavConnect = styled.nav`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    gap: 450px;
  }
`;

export const UserCss = styled(User)`
  width: 30;
  height: 30;
`

export const ImgCss = styled.img`
  border-radius: 10px;
  border: 1px dashed ${({theme}) => theme.colors.black};
`
