import styled from '@emotion/styled';
import { ReactComponent as Paw } from 'icons/paw.svg';


export const Container = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
margin-bottom: 40px;

.btn {
  font-weight: 700;
font-size: 16px;
letter-spacing: 0.04em;
margin-top: 15px;

  :hover focus {
    background: ${({ theme }) => theme.background.azure};
    border: none;
  }


}
}
`

// перевірити чи додали стилі для ховеру на кнопки
// :hover {
//     background: ${({ theme }) => theme.background.azure};
//     border: none;
//   }

export const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;

  @media (min-width: 767px) {
    font-size: 36px;
  }
`
export const PawIcon = styled(Paw)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  fill: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacing(3)};
`;
