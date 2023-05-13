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
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const Item = styled.li`
  position: relative;
  text-align: center;
  width: ${({ theme }) => theme.spacing(20)}px;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing(3)}px 0;
  font-size: ${({ theme }) => theme.spacing(2.5)}px;
  color: ${({ theme, currentStep, idx }) => {
    if (currentStep < idx) return '#888888';
    if (currentStep === idx) return theme.colors.blue;
    if (currentStep > idx) return theme.colors.green;
  }};

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.spacing(20)}px;
    height: ${({ theme }) => theme.spacing(2)}px;
    position: absolute;
    top: ${({ theme }) => theme.spacing(9)}px;

    background-color: ${({ theme, currentStep, idx }) => {
      if (currentStep < idx) return theme.colors.lightblue;
      if (currentStep === idx) return theme.colors.blue;
      if (currentStep > idx) return theme.colors.green;
    }};
    border-radius: ${({ theme }) => theme.spacing(2)}px;
  }
`;
