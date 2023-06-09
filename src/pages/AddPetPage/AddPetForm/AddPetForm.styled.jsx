import styled from '@emotion/styled';

import { Form } from 'formik';

import { ReactComponent as Paw } from 'icons/paw.svg';
import { ReactComponent as Arrow } from 'icons/arrow-left.svg';

export const StyledForm = styled(Form)`
  /* display: flex; */
  /* justify-content: center; */
`;

export const ContainerCss = styled.div`
  width: ${({ theme }) => theme.spacing(70)};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(6)};
  box-shadow: ${({ theme }) => theme.shadow.default};

  @media screen and (min-width: 768px) {
    width: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(176);
      }
      return theme.spacing(114.5);
    }};
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    padding-bottom: ${({ theme }) => theme.spacing(5)};
    margin-top: ${({ theme }) => theme.spacing(17)};
  }

  @media screen and (min-width: 1280px) {
    width: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(205.5);
      }
      return theme.spacing(114.5);
    }};
    padding-left: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(18.75);
      }
      return theme.spacing(8);
    }};
    padding-right: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(18.25);
      }
      return theme.spacing(8);
    }};
    margin-top: ${({ theme }) => theme.spacing(12.5)};
  }
`;

export const PawIcon = styled(Paw)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  fill: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacing(3)};
`;

export const ArrowIcon = styled(Arrow)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-right: ${({ theme }) => theme.spacing(3)};
  fill: ${({ theme }) => theme.colors.blue};
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  gap: ${({ theme }) => theme.spacing(3)};

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;
