import styled from '@emotion/styled';

export const List = styled.ul`
  margin-left: 16px;
  margin-right: 16px;
  display: grid;
  gap: 32px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    min-height: 574px;
  }

  @media screen and (min-width: 1280px) {
  min-height: 628px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
  }
`;
