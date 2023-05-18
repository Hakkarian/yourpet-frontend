import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  margin-bottom: ${({ theme, currentStep }) => {
    if (currentStep === 0) {
      return theme.spacing(7);
    }
    return theme.spacing(6);
  }}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme, currentStep }) => {
    if (currentStep === 0) {
      return theme.spacing(12);
    }
    return theme.spacing(6);
  }}px;
  } */
`;

export const Item = styled.li`
  position: relative;
  width: ${({ theme }) => theme.spacing(21)};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing(3)} 0;
  font-size: ${({ theme }) => theme.spacing(2.4)};
  line-height: 14px;
  color: ${({ theme, currentStep, idx }) => {
    if (currentStep < idx) return '#888888';
    if (currentStep === idx) return theme.colors.blue;
    if (currentStep > idx) return theme.colors.green;
  }};

  /* @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(32)};
    font-size: ${({ theme }) => theme.spacing(3.7)};
  } */

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.spacing(20)};
    height: ${({ theme }) => theme.spacing(2)};
    position: absolute;
    top: ${({ theme }) => theme.spacing(9)};
    left: 2px;

    background-color: ${({ theme, currentStep, idx }) => {
      if (currentStep < idx) return theme.colors.lightblue;
      if (currentStep === idx) return theme.colors.blue;
      if (currentStep > idx) return theme.colors.green;
    }};
    border-radius: ${({ theme }) => theme.spacing(2)};

    /* @media screen and (min-width: 768px) {
      width: ${({ theme }) => theme.spacing(30)};
      top: ${({ theme }) => theme.spacing(9.5)};
    } */
  }
`;
