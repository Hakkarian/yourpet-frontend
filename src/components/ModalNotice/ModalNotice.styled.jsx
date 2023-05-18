
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(43, 43, 43, 0.6);
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
position: absolute;
overflow-y: auto;
padding: 40px 20px 16px 20px;
top: 50%;
left: 50%;
background-color: white;
transform: translate(-50%, -50%);
// поки так height
// min-height: 100%;
height: min-content;
max-width: 280px;
width: 100%;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;

@media (min-width: 767px) {
  min-height: 540px;
  max-width: 681px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 28px;
`

export const ContainerList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 12px;
@media (min-width: 767px){
  margin-left: 24px;
}
`
export const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerImg = styled.div`

@media (min-width: 767px) {
  display: flex;
  flex-direction: row;
}
`

// export const CloseModalBtn = styled.button`
// padding: 0;
// width: 20px;
// height: 20px;
// position: absolute;
// top: 29px;
// right: 29px;
// background: none;
// border: none;
// `

export const Img = styled.img`
margin-bottom: 12px;
`

export const Title = styled.h2`
font-weight: 700;
font-size: 24px;
letter-spacing: -0.01em;
margin-bottom: 20px;
@media (min-width: 767px) {
  font-size: 28px;
}`

export const List = styled.ul`
`
export const Text = styled.ul`
font-weight: 600;
font-size: 14px;

@media (min-width: 767px) {
  font-size: 16px;
}
`

export const Item = styled.li`
margin-bottom: 8px;
:last-child {
  margin-bottom: 0;
}`

export const Coments = styled.p`
font-weight: 600;
font-size: 16px;
margin-bottom: 16px;

@media (min-width: 767px) {
  margin-bottom: 28px;
}
`

export const BtnContainer = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
flex-direction: column;
margin: 0 auto;

@media (min-width: 767px) {
  flex-direction: row;
  position: absolute;
  left: 375px;
  top: 476px;
}

.btn {
  padding: 0;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
  //  прибрати цей ховер якщо він зєявиться в блакитній та жовтій кнопках
   :hover {
     background: ${({theme}) => theme.background.azure};
     border: none;
   }
   :last-child {
    margin-bottom: 0;
   }

   @media (min-width: 767px) {
    width: 129px;
  
    margin-bottom: 0;
    margin-right: 17px;

    :last-child {
      margin-right: 0;
   }
}

svg {
  fill: white;
  stroke: red;
  margin: 0px;
  margin-left: 9px;
}
`

export const ContactsLink = styled(NavLink)`
padding: 0;
margin-left: 20px;
  border-radius: 40px;
  border: 2px solid ${({theme}) => theme.colors.blue}; 
  width: 125px;
  height: 40px;
  font-weight: 700;
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 0.04em;

  &.active {
    color: ${({theme}) => theme.colors.blue};
  }
`;

// export const AddToBtn = styled.button`
// font-weight: 700;
// font-size: 16px;
// width: 129px;
// height: 40px;
// background: ${({ theme }) => theme.colors.blue};
// color: ${({ theme }) => theme.colors.white};

// border-radius: 40px;
// border: none;

// &:focus,
//   &:hover {
//     background: ${({ theme }) => theme.colors.lightblue};
//     border: 2px solid ${({ theme }) => theme.colors.blue};
//     color: ${({ theme }) => theme.colors.blue};
// `

