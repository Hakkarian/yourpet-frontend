import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: ${props => {
    if (props?.width) {
      return props.width;
    }
    return props.theme.spacing(41);
  }};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};

  background: ${({ theme, transparent }) => {
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
  border-radius: ${({ theme }) => theme.spacing(10)};

  transition: background-color 2000ms ${({ theme }) => theme.utils.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme, transparent }) => {
      if (transparent) {
        return 'transparent';
      } else {
        return theme.background.azure;
      }
    }};
  }
`;
