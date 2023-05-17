import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const NavCss = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 40px;
  margin-left: 150px;
`;

export const NavLinkCss = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: yellow;
  }
`;