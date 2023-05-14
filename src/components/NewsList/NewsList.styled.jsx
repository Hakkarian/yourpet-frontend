import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  display: grid;
  gap: 24px;

  @media screen and (min-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc((100% - 32px) / 2);
    row-gap: 32px;
    column-gap: 24px;
  }
`;
