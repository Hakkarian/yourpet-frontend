import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 1280px;
  }
`;