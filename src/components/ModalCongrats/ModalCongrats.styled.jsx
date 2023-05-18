import styled from '@emotion/styled';

export const Container = styled.div`
position: fixed;
top: 25%;
left: 35%;
width: 500px;
height: 400px;

display: flex;
align-items: center;
text-align: center;
flex-direction: column;
margin-bottom: 60px;
}
`
// перевірити чи додали стилі для ховеру на кнопки
// :hover {
//     background: ${({ theme }) => theme.background.azure};
//     border: none;
//   }



export const Text = styled.p`
  margin-bottom: 60px;
  font-weight: 500;
  font-size: 16px;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;

export const Title = styled.h2`
  margin-top: 60px;
  margin-bottom: 52px;
  font-weight: 500;
  font-size: 24px;

  @media (min-width: 767px) {
    font-size: 36px;
  }
`
