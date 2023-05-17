import styled from '@emotion/styled';

export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;

  /* @media screen and (min-width: 768px) {
    margin-left: 0;
    font-size: ${({ theme }) => theme.spacing(7)}px;
  } */
`;
