import styled from "@emotion/styled";
import { font } from "shared/utils/mixin.styled";

export const GoogleCss = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;

  ${font('14px', 1.2, 500, '0.03em', null)}

  color: ${({ theme }) => theme.colors.black};

  border-radius: 15px 5px;
  border: 3px dashed ${({ theme }) => theme.colors.black};
  bow-shadow: ${({ theme }) => theme.shadow.default};

  transition: border 250ms linear, border-radius 250ms linear,
    color 250ms linear, background-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
    border: 3px dashed ${({ theme }) => theme.colors.blue};
    border-radius: 25px 15px;
    bow-shadow: ${({ theme }) => theme.shadow.hover};
  }

  @media screen and (min-width: 768px) {
    padding: 7px 25px;
    ${font('17px', 1.3, 500, '0.03em', null)}
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 30px;
    ${font('20px', 1.5, 500, '0.03em', null)}
  }
`;