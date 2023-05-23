import styled from '@emotion/styled';

export const ModalText = styled.p`
margin-bottom: 48px;
font-weight: 500;
font-size: 16px;
letter-spacing: -0.01em;

`

export const ModalTitle = styled.h2`
margin-top: 60px;
margin-bottom: 40px;
font-weight: 700;
font-size: 24px;
letter-spacing: -0.01em;
color: ${({theme}) => theme.colors.black};

@media (min-width: 767px) {
  font-size: 28px;
`


export const ColorSpan = styled.span`
  font-weight: 700;
`;

export const ContainerButton = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
flex-direction: column;
margin: 0 auto;


@media (min-width: 767px) {
  flex-direction: row;
}


  .svg {
    fill: none;
    stroke: '#FFFFFF';
  }

// прибрати ці стилі якщо вони зєявиться в блакитній та жовтій кнопках
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
  }
  @media (min-width: 767px) {
    width: 129px;
    margin-right: 17px;
  
  
   }
}
`
export const Container = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
margin-bottom: 16px;

@media (min-width: 767px) {
  
  margin-bottom: 60px;
}

}
`
