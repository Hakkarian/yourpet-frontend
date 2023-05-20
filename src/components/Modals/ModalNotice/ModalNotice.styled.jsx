
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: skroll;

  background-color: rgba(43, 43, 43, 0.6);
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
position: absolute;
overflow-y: auto;
padding: 44px 12px 16px 12px;
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
  padding: 40px 20px 16px 20px;
  min-height: 540px;
  max-width: 681px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;



@media (min-width: 767px){
  
}
`

export const ContainerList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 0;
@media (min-width: 767px){
  margin-left: 24px;
}
`
export const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerBox = styled.div`

@media (min-width: 767px) {
  display: flex;
  margin-bottom: 28px;
  flex-direction: row;
}
`

export const Title = styled.h2`
font-weight: 700;
font-size: 24px;
letter-spacing: -0.01em;
margin-bottom: 20px;
@media (min-width: 767px) {
  font-size: 28px;
  width: 321px;
height: 76px;
}`


export const Text = styled.ul`
font-weight: 600;
font-size: 14px;

@media (min-width: 767px) {
  font-size: 16px;
}
`

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
  margin-bottom: 8px;
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

@media (min-width: 767px) {
  
}

  &.active {
    color: ${({theme}) => theme.colors.blue};
  }
`;

export const Link = styled.a`
color: ${({theme}) => theme.colors.yellow};
font-weight: 500;
font-size: 12px;
text-decoration-line: underline;
@media (min-width: 767px) {
  font-size: 16px;
}


`

export const ColumOne = styled.td`
font-weight: 600;
font-size: 14px;
padding-bottom: 8px;
:last-child {
  padding-bottom: 0;
}

@media (min-width: 767px) {
  font-size: 16px;
}
`

export const ColumTwo = styled.td`
font-weight: 500;
font-size: 12px;
padding-left: 20px;

@media (min-width: 767px) {
  font-size: 16px;
  padding-left: 51px;
}
`


export const ImgBox = styled.div`
position: relative;
overflow: hidden;
margin-bottom: 12px;


img {
  border-radius: 0px 0px 40px 40px;
  width: 240px;
  height: 240px;
}


@media (min-width: 767px){
  img {
    width: 262px;
    height: 298px;
    margin-bottom: 0;
  }
 }
`

export const CategoryBox = styled.div`
position: absolute;
left: 0;
top: 20px;
padding: 6px 20px;
width: 158px;
border-top-right-radius: 14px;
border-bottom-right-radius: 14px;


background: #CCE4FB;
backdrop-filter: blur(50px);

p {
  font-weight: 500;
font-size: 14px;
}
`

// export const PawIcon = styled(Paw)`
//   width: ${({ theme }) => theme.spacing(6)};
//   height: ${({ theme }) => theme.spacing(6)};
//   fill: ${({ theme }) => theme.colors.white};
//   margin-left: ${({ theme }) => theme.spacing(3)};
// `;

// перед цим import { ReactComponent as Paw } from 'icons/paw.svg';