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

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme, currentStep }) => {
      if (currentStep === 0) {
        return theme.spacing(12);
      }
      return theme.spacing(6);
    }}px;

    width: ${({ theme }) => theme.spacing(98.5)}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Item = styled.li`
  position: relative;
  width: ${({ theme }) => theme.spacing(21)}px;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing(3)}px 0;
  font-size: ${({ theme }) => theme.spacing(2.4)}px;
  line-height: 14px;
  color: ${({ theme, currentStep, idx }) => {
    if (currentStep < idx) return '#888888';
    if (currentStep === idx) return theme.colors.blue;
    if (currentStep > idx) return theme.colors.green;
  }};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(32)}px;
    font-size: ${({ theme }) => theme.spacing(3.7)}px;
  }

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.spacing(20)}px;
    height: ${({ theme }) => theme.spacing(2)}px;
    position: absolute;
    top: ${({ theme }) => theme.spacing(9)}px;
    left: 2px;

    background-color: ${({ theme, currentStep, idx }) => {
      if (currentStep < idx) return theme.colors.lightblue;
      if (currentStep === idx) return theme.colors.blue;
      if (currentStep > idx) return theme.colors.green;
    }};
    border-radius: ${({ theme }) => theme.spacing(2)}px;

    @media screen and (min-width: 768px) {
      width: ${({ theme }) => theme.spacing(30)}px;
      top: ${({ theme }) => theme.spacing(9.5)}px;
    }
  }
`;
