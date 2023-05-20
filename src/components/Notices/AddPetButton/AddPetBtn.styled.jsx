import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
//   @media screen and (max-width: 767px) {
//     width: 129px;
//     position: fixed;
//     top: 70%;
//     right: 0px;
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     gap: 12px;
//     z-index: 10;
//   }

    display: flex;
    align-items: flex-end;
justify-content:flex-end;
    position: relative;
    // top: 0;
    // right: 0;
  }
`;

export const Text = styled.p`
  display: inline-block;
    line-height: 1.3;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    letter-spacing: 0.04em;
      margin-right: 12px;
    margin-bottom: 0;
  }
`;

export const AddBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  transition: color 250ms linear, background-color 250ms linear;
  padding: 10px 28px;
  text-decoration: none;
  border: none;
  displey: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 40px;
  padding: 9px 8px 9px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  position: absolute;
  width: 129px;
  height: 40px;
  top: -19px;
  right: 70px;

  background: ${({ theme }) => theme.colors.blue};
  //  display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;

  &:hover,  &:focus: {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
  }
  &.active {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 1024px) {
    top: -80px;
    right: -400px;
  }
`;

export const IconAdd = styled.img`
  fill: ${({ theme }) => theme.colors.white};
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 29px;
`;

export const AddPetButton = styled(NavLink)``;
