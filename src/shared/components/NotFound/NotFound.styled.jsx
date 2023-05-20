import styled from '@emotion/styled';
import { ReactComponent as Notify } from '../../../icons/plugnews.svg';

export const Section = styled.section``;

export const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Plug = styled(Notify)`
  width: 280px;
  height: 280px;
  fill: #54adff;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 1.37;
  @media (max-width: 480px) {
    min-width: 280px;
    font-size: 6vw;
  }
  @media (min-width: 767px) {
    // width: 684px;
    font-size: 32px;
  }
`;
