import styled from '@emotion/styled';
import { ReactComponent as Paw } from '../../icons/paw.svg';

export const AuthNavCss = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(10)};
    padding: 8px 20px;
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.colors.yellow};
    background: ${({ theme }) => theme.colors.white};
    min-width: 165px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};

    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
    @media screen and (min-width: 768px) {
      min-width: 142px;
    }
  }
  .active {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
    background: none;
    background-color: transparent;
  }
`;

export const PawCss = styled(Paw)`
  fill: currentColor;
`;
