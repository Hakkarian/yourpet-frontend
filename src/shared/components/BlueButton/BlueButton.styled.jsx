import styled from "@emotion/styled";

export const Button = styled.button`
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