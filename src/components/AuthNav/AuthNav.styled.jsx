import styled from "@emotion/styled";
import { ReactComponent as Paw } from '../../icons/paw.svg';

export const AuthNavCss = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 20px;
  }
`;



export const PawCss = styled(Paw)`
  fill: currentColor;
`;

