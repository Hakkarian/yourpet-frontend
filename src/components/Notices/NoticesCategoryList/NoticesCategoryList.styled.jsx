import styled from '@emotion/styled';


export const Wrapper = styled.div`
margin: 0 auto;

@media screen and (max-width: 767px) {
    max-width: 480px;
  }

@media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 40px;
  }

@media screen and (min-width: 1280px) {
    width: 1248px;
    margin-top: 42px;
  }
`;

export const List = styled.ul`
  margin-top: 24px;
  margin-bottom: 36px;
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
