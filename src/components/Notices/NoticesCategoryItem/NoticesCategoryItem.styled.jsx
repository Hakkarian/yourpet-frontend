import styled from '@emotion/styled';
import { ReactComponent as Heart } from 'icons/heart.svg';
import { ReactComponent as Trash } from 'icons/trash.svg';


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
  width: 280px;
  height: 456px;
   display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  button {
    font-weight: 600;
font-size: 16px;
  }
`;

// export const DescriptionTextContainer = styled.div`
//   display: flex;
//   justify-content: start;
//   //  height: 100%;
//   width: 100%;
//   background: ${({ theme }) => theme.colors.lightblue};
//   border-radius: 16px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   svg path {
//     stroke: ${({ theme }) => theme.colors.yellow};
//   }
  export const DescriptionTextContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 80px;
  height: 28px;
  background: ${({ theme }) => theme.colors.lightblue};
  border-radius: 16px;

  svg {
    width: 24px;
    height: 24px;
    fill: transparent;
  }
  path {
    stroke: ${({ theme }) => theme.colors.blue};
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
  overflow: hidden;
  text-overflow: ellipsis;
  [data-tooltip] {
    position: relative; 
  }
  [data-tooltip]::after {
    content: attr(data-tooltip);
    position:absolute;
    width: 100px; 
    left: 0; top: 0; 
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5em; 
       pointer-events: none; 
    opacity: 0; 
    transition: 1s; 
   } 
   [data-tooltip]:hover::after {
    opacity: 1; 
    top: 2em; 
   }
`;

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
   /* display: flex;
 flex-direction: column; */
`;

export const Span = styled.span`
`;

export const HeartIcon = styled(Heart)`
  width: 24px;
  height: 24px;
  fill: transparent;

  path {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const FilledHeartIcon = styled(Heart)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.blue};

  path {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const TrashIcon = styled(Trash)`
  width: 24px;
  height: 24px;
  fill: transparent;

  path {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;
