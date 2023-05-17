import styled from '@emotion/styled';

export const ToolBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(19)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)}px;

  /* @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(30)}px;
  } */
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;
