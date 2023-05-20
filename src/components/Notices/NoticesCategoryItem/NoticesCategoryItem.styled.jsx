import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  width: 280px;
  height: 456px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.hover};
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1024px) {
    width: 288px;
  }
`;

// export const ButtonsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// export const StyledButton = styled.div`
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   width: 248px;
//   height: 38px;
//   background: ${({ theme }) => theme.colors.white};
//   border: none;
//   border-radius: 40px;
//   align-items: center;
//   font-weight: 500;
//   font-size: 16;
//   line-height: 22px;
//   letter-spacing: 0.04em;
//   transition: color, border 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   color: ${({ theme }) => theme.colors.lightblue};
//   margin: auto 16px 12px 16px;

//   &:only-of-type {
//     margin-bottom: 32px;
//   }

//   &:hover,
//   :focus {
//     color: ${({ theme }) => theme.colors.blue};
//   }

//   @media screen and (min-width: 768px) {
//     margin-right: 44px;
//     margin-left: 44px;
//   }

//   @media screen and (min-width: 1024px) {
//     margin-right: 20px;
//     margin-left: 20px;
//   }
// `;

export const ImageWrapper = styled.div`
  // position: relative;
  //   width: 100%;
  //   margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 288px;
  height: 288px;
  object-fit: cover;

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
  background: ${({ theme }) => theme.colors.lightblue};
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
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: 50%;
`;

export const AddToFavoriteBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const RemoveFromFavoriteBtn = styled.button`
  fill: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 28;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
  width: 231px;
  height: 76px;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  gap: 4px;
 

`;

export const DescriptionInner = styled.div`
`;

export const DescriptionTextContainer = styled.div`
  display: flex;
  justify-content: start;
  //  height: 100%;
   width: 100%;
  background: ${({ theme }) => theme.colors.lightblue};
  border-radius: 16px; 
  svg path {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

export const DescriptionText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  line-height: 1.37;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
  /* display: flex;
 flex-direction: column; */
`;

export const IconItem = styled.img`
  fill: transparent;
  path {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const IconItemPaw = styled.img`
  opacity: 0;
  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.white};
    visibility: hidden;
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export const Span = styled.span``;
