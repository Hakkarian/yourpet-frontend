import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(10.5)};
  width: 100%;

  @media screen and (max-width: 767px) {
    width: ${({ theme }) => theme.spacing(70)};
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: ${({ theme }) => theme.spacing(8)};
  
`;
