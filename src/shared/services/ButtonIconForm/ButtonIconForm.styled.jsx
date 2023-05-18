import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

export const ButtonIcon = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: '#757575';
  svg {
    color: ${({ color }) => color ?? color};
  }
  svg:hover {
    color: ${({ hoverColor }) => hoverColor ?? hoverColor};
  }

  @media screen and (min-width: 768px) {
    right: 20px;
  }

  @media screen and (min-width: 1024px) {
  }
`;
