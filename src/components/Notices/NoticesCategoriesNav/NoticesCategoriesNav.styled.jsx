import styled from '@emotion/styled';

export const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const ButtonNav = styled.button`
  height: 35px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  &:hover: {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  color: ${({ theme }) => theme.colors.blue};
  padding: 8px 16px 8px 16px;
  text-decoration: none;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
`;
