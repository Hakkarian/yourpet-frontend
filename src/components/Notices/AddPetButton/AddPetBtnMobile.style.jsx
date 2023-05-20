import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 28px;
`;

export const AddPetButton = styled(NavLink)``;

export const AddBtn = styled.button`
  position: fixed;
  z-index: 1;
     width: 80px;
      height: 80px;
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 50%;
      border: none;
      padding: 0;
        min-width: 44px;
  transform: translateX(-68%) translateY(25%);
//     @media screen and (min-width: 400px)(max-width:767px) {
//    transform: translateX(217%) translateY(-55
//    }
  bottom: 15vh;
  transition: normal;
  color: ${({ theme }) => theme.colors.white};
 
  svg path {
    stroke: ${({ theme }) => theme.colors.white};

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colors.lightblue};
      color: ${({ theme }) => theme.colors.blue};
    }  
`;

export const IconAdd = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 20px;
  right: 29px;
fill: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  position: absolute;
  left: 10px;
  min-width: 60px;
  margin-right: 26px;
  color: ${({ theme }) => theme.colors.white};
`;
