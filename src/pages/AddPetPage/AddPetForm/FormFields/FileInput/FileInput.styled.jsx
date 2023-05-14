import styled from '@emotion/styled';

export const CustomInput = styled.input`
  /* display: none; */
`;

export const CustomLabel = styled.label`
  display: block;
  width: ${({ theme }) => theme.spacing(28)}px;
  height: ${({ theme }) => theme.spacing(28)}px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: ${({ theme }) => theme.spacing(5)}px;
`;
