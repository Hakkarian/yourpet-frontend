import styled from '@emotion/styled';

export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  margin-left: ${({ theme }) => theme.spacing(3)};

  /* @media screen and (min-width: 768px) {
    margin-left: 0;
    font-size: ${({ theme }) => theme.spacing(7)};
  } */
`;
