import styled from '@emotion/styled';

export const ToolBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(23.75)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(34)}px;
  }
`;
