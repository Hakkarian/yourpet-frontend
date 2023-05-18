import styled from '@emotion/styled';

export const ToolBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(23.75)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(34)};
  }
`;
