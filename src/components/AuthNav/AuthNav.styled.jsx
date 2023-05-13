import styled from "@emotion/styled";
import { ReactComponent as Paw } from '../../icons/paw.svg';
import ReusableButton from "shared/components/ReusableButton";

export const AuthNavCss = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 20px;
  }
`;

export const ReusableButtonCss = styled(ReusableButton)`
  background-color: yellow;
`

export const PawCss = styled(Paw)`
  fill: currentColor;
`;

