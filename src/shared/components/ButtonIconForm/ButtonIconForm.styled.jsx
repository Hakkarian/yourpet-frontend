import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 12px;
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
    fill: ${({ color }) => color ?? color};
    opacity: 0.5;
    transition: color 250ms ease-in-out opacity 250ms ease-in-out;

    path {
      stroke: ${({ color }) => color ?? color};
      transition: transform 250ms ease-in-out;
    }
  }
  svg:hover {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    right: 20px;
  }
`;
