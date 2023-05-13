import styled from 'styled-components';

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
padding: 0;
width: 20px;
height: 20px;
position: absolute;
top: 29px;
right: 29px;
background: none;
border: none;
`

export const CancelBtn = styled.button`
margin: 0px 17px 109px 166px;

font-weight: 700;
font-size: 16px;
width: 129px;
height: 40px;
background: none;
color: #54ADFF;
border-radius: 40px;
border: 2px solid #54ADFF;

&:focus,
  &:hover {
    background: #CCE4FB;
  }

`

export const YesBtn = styled.button`
font-weight: 700;
font-size: 16px;
width: 129px;
height: 40px;
background: #54ADFF;
color: #FFFFFF;
border-radius: 40px;
border: none;

&:focus,
  &:hover {
    background: #CCE4FB;
    border: 2px solid #54ADFF;
    color: #54ADFF;
`