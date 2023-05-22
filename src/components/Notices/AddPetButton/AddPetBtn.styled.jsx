import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import ReusableButton from 'shared/components/ReusableButton';
import { ReactComponent as Add } from '../../../icons/plus.svg';

// export const Text = styled.p`{
//   display: inline-block;
//     line-height: 1.3;
//   margin-bottom: 0;
//   color: ${({ theme }) => theme.colors.white};
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 22px;
//     align-items: center;
//     letter-spacing: 0.04em;
//       margin-right: 12px;
//     margin-bottom: 0;
//   }
// `;

// export const AddBtn = styled(ReusableButton)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 9px 16px;
//   background-color: ${({ theme }) => theme.colors.blue};
//   color: ${({ theme }) => theme.colors.white};
//   border: 1px solid ${({ theme }) => theme.colors.lightblue};

//   transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
//     border 1px solid ease-in-out stroke 250ms ease-in-out;

//   &:hover,
//   &:focus {
//     background-color: transparent;
//     color: ${({ theme }) => theme.colors.blue};
//     border: 1px solid ${({ theme }) => theme.colors.blue};
//     svg path {
//       stroke: ${({ theme }) => theme.colors.blue};
//     }
//   }

//   svg path {
//     stroke: ${({ theme }) => theme.colors.white};
//   }

//   @media screen and (min-width: 768px) {
//   }
// `;

export const AddCss = styled(Add)``;

export const AddPetButton = styled(NavLink)`
  min-width: 129px;
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.blue};

  border: 1px solid ${({ theme }) => theme.colors.lightblue};
  border-radius: 40px;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 1px solid ease-in-out stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    svg path {
      stroke: ${({ theme }) => theme.colors.blue};
    }
  }

  svg path {
    stroke: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
  }
`;
