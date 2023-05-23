import styled from "@emotion/styled";
import { ReactComponent as Trash } from 'icons/trash.svg';

export const SvgWrapper = styled.button`
  position: absolute;
  right: 12px;
  top: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: 50%;
  cursor: pointer;
//   background-color: transparent;
  border: none;
`;

export const TrashIcon = styled(Trash)`
  width: 24px;
  height: 24px;
  fill: transparent;
 

  path {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;