// import styled from 'styled-components';
import styled from "@emotion/styled";

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
top: 50%;
left: 50%;
background-color: white;
transform: translate(-50%, -50%);
min-height: 354px;
max-width: 608px;
width: 100%;


box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
`;

export const CloseModalBtn = styled.button`
`

export const Text = styled.p`
margin: 0px 129px 60px 129px;
font-weight: 500;
font-size: 24px;
letter-spacing: 0.04em;
`

export const Title = styled.h2`
margin: 60px 191px 52px 191px;
font-weight: 500;
font-size: 36px;
letter-spacing: 0.04em;
color: #111111;
`

export const GoToBtn = styled.div`
margin: 0px 179px 60px 181px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 16px;
width: 248px;
height: 40px;
letter-spacing: 0.04em;
background: ${({ theme }) => theme.colors.blue};
color: ${({ theme }) => theme.colors.white};
border-radius: 40px;
border: none;

&:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.lightblue};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
`