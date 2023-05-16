import styled from "@emotion/styled";

export const ContainerButton = styled.div`
display: flex;
align-items: center;
text-align: center;

svg {
  fill: none;
  stroke: whete;
}
`

export const ModalTitle = styled.h2`
margin-top: 109px;
margin-bottom: 52px;
font-weight: 500;
font-size: 36px;
letter-spacing: 0.04em;
color: ${({theme}) => theme.colors.black};
`