import styled from "@emotion/styled";

export const ButtonCss = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  font-size: ${({theme}) => theme.spacing(9)}px;
`;
