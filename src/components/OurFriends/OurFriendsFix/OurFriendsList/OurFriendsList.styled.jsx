import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
   row-gap: ${({ theme }) => theme.spacing(6)};
  width: 100%;
  
  @media screen and (max-width: 767px) {
    width: ${({ theme }) => theme.spacing(70)};
  }
  @media screen and (min-width: 768px) {
   flex-direction: row;;
    flex-wrap: wrap;
    column-gap: ${({ theme }) => theme.spacing(8)};
`;
