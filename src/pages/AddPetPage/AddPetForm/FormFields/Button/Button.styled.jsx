import styled from '@emotion/styled';

export const StyledButton = styled.button`
  min-width: ${props => {
    if (props?.width) {
      return props?.width;
    }
    return props.theme.spacing(41);
  }}px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)}px;

  font-size: ${({ theme }) => theme.spacing(4)}px;
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(5)}px;

  background-color: ${({ theme, transparent }) => {
    if (transparent) {
      return 'transparent';
    } else {
      return theme.colors.blue;
    }
  }};
  color: ${({ theme, transparent }) => {
    if (transparent) {
      return theme.colors.blue;
    } else {
      return theme.colors.white;
    }
  }};

  border: none;
  border-radius: ${({ theme }) => theme.spacing(10)}px;

  &:hover,
  &:focus {
    color: ${({ theme, transparent }) => {
      if (transparent) {
        return theme.colors.white;
      } else {
        return theme.colors.blue;
      }
    }};
    background-color: ${({ theme, transparent }) => {
      if (transparent) {
        return theme.colors.blue;
      } else {
        return 'transparent';
      }
    }};
  }
  cursor: pointer;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;
`;
