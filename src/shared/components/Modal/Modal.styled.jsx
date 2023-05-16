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
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
top: 50%;
left: 50%;
background-color: ${({theme}) => theme.colors.white};
transform: translate(-50%, -50%);
min-height: 354px;
max-width: 608px;
width: 100%;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
`;

export const CloseModalBtn = styled.button`
padding: 0;
width: 20px;
height: 20px;

position: absolute;
top: 29px;
right: 29px;
background: none;
border: none;
`
