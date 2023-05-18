import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme, category }) =>
    category === 'my pet' ? theme.spacing(15.5) : theme.spacing(6)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme, category }) =>
      category === 'my pet' ? theme.spacing(15) : theme.spacing(8)};
  }
`;
