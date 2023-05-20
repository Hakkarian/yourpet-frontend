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
    transition: transform 250ms ease-in-out, color 250ms ease-in-out;
  }
  svg:hover {
    color: ${({ hovercolor }) => hovercolor ?? hovercolor};
  }
  @media screen and (min-width: 768px) {
    right: 20px;
  }
  @media screen and (min-width: 1024px) {
  }
`;
