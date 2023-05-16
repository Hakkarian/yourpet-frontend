import styled from "@emotion/styled";
import { ReactComponent as Paw } from '../../icons/paw.svg';

import Button from "shared/components/Button/Button";

export const AuthNavCss = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 1280px) {
    margin-left: 300px;
  }
`;

export const ButtonCss = styled(Button)`
    min-width: 165px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 1px solid transparent;

    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.yellow};
      background: none;
      background-color: transparent;
    }
`;

export const PawCss = styled(Paw)`
  fill: currentColor;
`;

