import styled from "@emotion/styled";

export const Container = styled.div`


`

export const ContainerButton = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
margin: 0 auto;
width: 275px;


svg {
  fill: none;
  stroke: white;
}
.btn {
  padding: 0;
 height: 40px;
 font-weight: 700;
 font-size: 16px;
 //  прибрати цей ховер якщо він зєявиться в блакитній та жовтій кнопках
  :hover {
    background: ${({theme}) => theme.background.azure};
    border: none;
  }
}

 .svg {
  fill: red;
  // stroke: ${({theme}) => theme.colors.white};
 }

}
`
export const ModalTitle = styled.h2`
margin-bottom: 52px;
font-weight: 500;
font-size: 36px;
letter-spacing: 0.04em;
color: ${({theme}) => theme.colors.black};
`