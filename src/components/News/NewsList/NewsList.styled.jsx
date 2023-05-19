import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  display: grid;
  row-gap: 24px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
  }
`;
