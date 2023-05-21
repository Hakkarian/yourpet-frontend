import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Paw } from 'icons/paw.svg';

export const Container = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
width: 100%;
height: 100%;

}
`;

export const ContainerButton = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
margin: 0 auto;
flex-direction: column;

@media (min-width: 767px) {
  flex-direction: row;
}
  

.btn {
  padding: 0;
 height: 40px;
 font-weight: 700;
 font-size: 16px;
 margin-top: 8px;

 //  прибрати цей ховер якщо він зєявиться в блакитній та жовтій кнопках
  :hover {
    background: ${({ theme }) => theme.background.azure};
    border: none;
  }
  @media (min-width: 767px) {
    width: 129px;
    margin-top: 0;
    margin-right: 17px;
  }
}}`;

export const ButtonRegister = styled(NavLink)`
width: 256px;
height: 40px;
font-weight: 700;
font-size: 16px;
background: ${({ theme }) => theme.colors.blue};
color: ${({ theme }) => theme.colors.white};
border-radius: 40px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

:hover {
  background: ${({ theme }) => theme.background.azure};
  border: none;
}

@media (min-width: 767px) {
  width: 248px;
}
`

export const ModalTitle = styled.h2`
margin-bottom: 48px;
font-weight: 500;
font-size: 24px;
letter-spacing: 0.04em;
color: ${({ theme }) => theme.colors.black};

@media (min-width: 767px) {
  font-size: 36px;
`;


export const PawIcon = styled(Paw)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  fill: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacing(3)};
`;