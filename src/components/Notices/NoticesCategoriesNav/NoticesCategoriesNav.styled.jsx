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
  @media screen and (min-width: 1024px) {
  }
`;

export const ListNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 0;
    // width: 540px;
    // height: 35px;
    // gap: 12px;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1280px) {
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
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    // height:35px;
  }
`;
export const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
