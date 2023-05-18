import styled from '@emotion/styled';

export const Item = styled.li`
  width: 100%;

  position: relative;
  border-radius: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.default};

  &::before {
    content: '';
    position: absolute;
    top: -${({ theme }) => theme.spacing(5)};
    left: 0;

    width: 100%;
    height: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.background.azure};

    @media screen and (min-width: 768px) {
      top: -${({ theme }) => theme.spacing(5.5)};
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 32px) / 3);
  }
`;

export const WrapImg = styled.div`
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(5)};
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Wrap = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
export const Title = styled.h2`
  margin-left: 0;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(16.5)};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(6)};
  line-height: 1.37;
  letter-spacing: -0.01em;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Decsr = styled.p`
  font-weight: 400;
  line-height: 1.37;
  height: ${({ theme }) => theme.spacing(27.5)};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const WrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
export const Date = styled.p`
  font-weight: 400;
  line-height: 1.37;
  color: ${({ theme }) => theme.colors.blue};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const Link = styled.a`
  padding: 0;
  line-height: 1.37;
  color: ${({ theme }) => theme.colors.blue};
`;
