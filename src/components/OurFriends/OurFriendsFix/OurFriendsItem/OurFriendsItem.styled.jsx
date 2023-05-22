import styled from '@emotion/styled';
import { ReactComponent as Notify } from '../../../../icons/plugnews.svg';

export const Item = styled.li`
  width: 100%;
  padding: 16px 12px;
  border-radius: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.default};

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 32px) / 3);
  }
`;

export const Title = styled.a`
  display: block;
  padding: 0;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(16.5)};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(6)};
  line-height: 1.35;
  letter-spacing: -0.01em;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.colors.blue};
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.lightblue};
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
export const WrapImg = styled.div`
  display: flex;
  align-items: center;

  img,
  svg {
    display: block;
    width: 100px;
    height: 68px;
    object-fit: cover;
    @media screen and (min-width: 768px) {
      width: 124px;
      height: 68px;
    }
    @media screen and (min-width: 1280px) {
      width: 146px;
    }
  }
`;

export const WrapInfo = styled.div`
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: ${({ theme }) => theme.colors.black};
  }
  a,
  button {
    display: block;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.black};
    transition: color 250ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
    .addressItem {
      height: 48px;
    }
  }
  .time {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

//  svg {
//     color: ${({ color }) => color ?? color};
//     transition: transform 250ms ease-in-out, color 250ms ease-in-out;
//   }
//   svg:hover {
//     color: ${({ hovercolor }) => hovercolor ?? hovercolor};
//   }

export const Plug = styled(Notify)`
  width: 280px;
  height: 280px;
  fill: #54adff;
`;

// overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
