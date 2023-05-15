import styled from '@emotion/styled';

export const Item = styled.li`
  margin: 0 auto;

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
  margin: 0 auto;
  width: 100%;
  border-radius: 2px;
`;

export const Wrap = styled.div`
  padding: 16px;
`;

export const Img = styled.img`
  width: 280px;
  height: 252px;
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
`;
export const Date = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;

export const Link = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;
