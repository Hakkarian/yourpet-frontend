import styled from '@emotion/styled';

export const Item = styled.li`
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
  @media screen and (min-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 32px) / 3);
  }
`;

export const Line = styled.div`
  margin-bottom: 12px;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.background.azure};

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
`;

export const WrapImg = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: 20px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Wrap = styled.div`
  padding: 0 12px;
  margin-bottom: 12px;
`;
export const Title = styled.h2`
  margin-left: 0;
  margin-bottom: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const Decsr = styled.p`
  margin-bottom: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  pading: 0, 12px;
  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;

export const WrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;
export const Date = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #888888;

  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;

export const Link = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;
