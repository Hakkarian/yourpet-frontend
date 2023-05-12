import styled from '@emotion/styled';

export const ReusableInput = styled.input`
  width: ${({ theme }) => theme.spacing(64)}px;
  height: ${({ theme }) => theme.spacing(12)}px;

  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.spacing(10)}px;
`;