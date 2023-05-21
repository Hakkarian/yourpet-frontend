import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 28px;
`;

export const AddPetButton = styled(NavLink)``;

export const AddBtn = styled.button`
  position: fixed;
  bottom: 2%;
  right: 5%;
  z-index: 1;
     width: 80px;
      height: 80px;
      padding-bottom: 7px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 50%;
      border: none;


        min-width: 44px;
      
  color: ${({ theme }) => theme.colors.white};
 
  svg path {
    stroke: ${({ theme }) => theme.colors.white};

    transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 1px solid ease-in-out stroke 250ms ease-in-out;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colors.lightblue};
      color: ${({ theme }) => theme.colors.blue};
      svg path {
    stroke: ${({ theme }) => theme.colors.blue};
    }

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
