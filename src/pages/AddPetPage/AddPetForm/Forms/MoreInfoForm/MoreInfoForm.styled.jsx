import styled from '@emotion/styled';

export const Subtitle = styled.p`
  margin: 0;
  font-family: inherit;
  font-size: ${({ theme }) => theme.spacing(3.75)}px;
  font-weight: 500;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme, gap }) => theme.spacing(gap / 4)}px;
`;
