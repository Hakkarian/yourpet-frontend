import styled from '@emotion/styled';

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.spacing(3)};
  margin: 4px 0 0;
  width: 268px;
`;
