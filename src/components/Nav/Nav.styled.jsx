import styled from '@emotion/styled';

export const NavCss = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 40px;
  margin-left: 150px;
  .link {
    color: ${({ theme }) => theme.colors.black};

    transition: color 250ms ease-in-out;
  }
  .active {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
