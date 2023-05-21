import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  padding: 12px;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border-color: ${({ theme }) => theme.colors.white};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: 'transparent';

  p {
    margin-right: 12px;
  }
`;
