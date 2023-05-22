import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(1)};

  border-color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.blue};
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
    background-color: transparent;
    font-weight: 400;
    font-size: 16px;
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
`;
