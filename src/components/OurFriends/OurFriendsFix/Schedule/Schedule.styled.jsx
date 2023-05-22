import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 12px;
  border-color: border-color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: ${({ theme }) => theme.spacing(3)};
  border-color: ${({ theme }) => theme.colors.white};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  button {
    border: none;
    display: block;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.blue};
    transition: color 250ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
    .addressItem {
      height: 48px;
    }
  }
  }
`;
export const Item = styled.li`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: 'transparent';
  p {
    margin-right: 12px;
  }
`;
