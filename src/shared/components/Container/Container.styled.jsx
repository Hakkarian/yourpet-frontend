import styled from "@emotion/styled";


export const Container = styled.div`
  /* width: 100%; */
  margin: 0 auto;

  // background-color: ${({theme})=>theme.colors.white};
  @media screen and (max-width: 767px) {
    padding: 0 20px;


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
