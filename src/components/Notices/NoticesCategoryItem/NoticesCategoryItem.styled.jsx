import styled from '@emotion/styled';
// import heart from '../../../icons/heart.svg';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 248px;
  height: 38px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 40px;
  align-items: center;
  font-weight: 500;
  font-size: 16;
  line-height: 22px;
  letter-spacing: 0.04em;
  transition: color, border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.lightblue};
  margin: auto 16px 12px 16px;

  &:only-of-type {
    margin-bottom: 32px;
  }

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    margin-right: 44px;
    margin-left: 44px;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const Item = styled.li`
  position: relative;
  width: 280px;
  height: 606px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 606px;
  }
  @media screen and (min-width: 1024px) {
    width: 288px;
    height: 606px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 288px;
  height: 288px;
  object-fit: cover;
  //   background-color: #d3d3d3;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 288px;
  }
  @media screen and (min-width: 1024px) {
    width: 288px;
    height: 288px;
  }
`;

export const CategoryName = styled.p`
  position: absolute;
  top: 0;
  width: 158px;
  height: 28px;
  margin-top: 20px;
  padding-left: 20px;
  border-radius: 0px 40px 40px 0px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  line-height: 16px;
`;

export const SvgWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`;

export const AddToFavoriteBtn = styled(img)`
  cursor: pointer;
`;

export const RemoveFromFavoriteBtn = styled(img)`
  fill: #f59256;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 28;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
  margin-left: 20px;
  width: 231px;
  height: 76px;
  overflow: hidden;
`;

export const DescriptionWrapper = styled.div``;

export const DescriptionInner = styled.div`
  display: flex;
`;

export const DescriptionTextContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.p`
  font-weight: 500;
  font-size: 16;
  line-height: 1.37;
  color: ${({ theme }) => theme.colors.black};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
  /* display: flex;
 flex-direction: column; */
`;

export const IconItem = styled.img``;

export const Span = styled.span``;
