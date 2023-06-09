import styled from '@emotion/styled';

export const Subtitle = styled.p`
  margin: 0;
  font-family: inherit;
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5.75)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: 0;

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

export const DivCss = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(5.75)};
  }
`;

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  @media screen and (min-width: 768px) {
    display: ${({ category }) => (category === 'my pet' ? 'block' : 'flex')};
    justify-content: space-between;
    margin-bottom: ${({ category, theme }) =>
      category === 'my pet' ? theme.spacing(4.25) : theme.spacing(15)};
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: ${({ category, theme }) =>
      category === 'my pet' ? theme.spacing(4.25) : theme.spacing(16)};
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};
  margin-bottom: ${({ theme, category }) =>
    category !== 'my pet' ? theme.spacing(4) : theme.spacing(6)};

  @media screen and (min-width: 768px) {
    flex-direction: ${({ category }) =>
      category !== 'my pet' ? 'column' : 'row'};
    gap: ${({ theme, category }) =>
      category !== 'my pet' ? theme.spacing(3) : theme.spacing(8.25)};
    margin-bottom: ${({ theme, category }) =>
      category !== 'my pet' ? 0 : theme.spacing(6)};
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(98.5)};
  }
`;
