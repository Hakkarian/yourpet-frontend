import styled from '@emotion/styled';

export const ReusableTitle = styled.h1`
  font-size: ${({ theme }) => theme.spacing(12)}px;
  font-weight: 700;
  line-height: 66px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
`;
