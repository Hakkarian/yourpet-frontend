import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const NavCss = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    gap: 42px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const NavLinkCss = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: yellow;
  }
`;