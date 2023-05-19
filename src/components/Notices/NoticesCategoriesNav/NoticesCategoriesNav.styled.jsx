import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyle = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export const ListNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: 1024px) {
    flex-wrap: no-wrap;
    flex-direction: row;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-wrap: no-wrap;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ItemNav = styled.li`
  display: flex;
`;

export const ButtonNav = styled(NavLink)`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  color: ${({ theme }) => theme.colors.blue};
  transition: color 250ms linear, background-color 250ms linear;
  padding: 10px 28px;
  text-decoration: none;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  align-items: center;
  &:hover,  &:focus: {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
export const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const BoxNav = styled.div`
  position: relative;

  padding-top: 28px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1000px;
  }
`;


export const AddPetButton = styled(NavLink)``

export const AddPetButtonWrp = styled.button`
  position: fixed;
  z-index: 1;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: #f59256;
  padding: 0;
  background: ${({ theme }) => theme.colors.blue};
  min-width: 44px;
  transform: translateX(217%) translateY(-55%);
  bottom: 15vh;

  transition: normal;

  color: ${({ theme }) => theme.colors.white};  
  svg puth{stroke: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.lightblue};
  }

  @media screen and (min-width: 768px) {
    position: static;

    width: 44px;
    height: 44px;
    padding-top: 2px;
    margin-left: 12px;

    transform: none;
  }
`;

export const IconAddPet = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 20px;
  right: 29px;

} 
  @media screen and (min-width: 768px) {
    position: none;
    width: 17.49px;
    height: 17.49px;
    position: static;
  }
`;
  
export const Span = styled.span`
  position: absolute;
  left: 10px;

  min-width: 60px;
  margin-right: 26px;

  color: ${({ theme }) => theme.colors.wight};

  @media screen and (min-width: 768px) {
    position: absolute;
    left: -60px;
    color: #000;
  }
`;
