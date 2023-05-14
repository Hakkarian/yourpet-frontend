
import styled from "@emotion/styled";
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
top: 50%;
left: 50%;
background-color: white;
transform: translate(-50%, -50%);
min-height: 540px;
max-width: 681px;
width: 100%;


box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
`;

export const CloseModalBtn = styled.button`
`

export const AddToBtn = styled.button`
font-weight: 700;
font-size: 16px;
width: 129px;
height: 40px;
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

export const ContactsLink = styled.button`
`