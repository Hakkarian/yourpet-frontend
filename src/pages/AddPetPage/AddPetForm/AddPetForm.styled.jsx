import styled from '@emotion/styled';

import { Form } from 'formik';

import { ReactComponent as Paw } from 'icons/paw.svg';
import { ReactComponent as Arrow } from 'icons/arrow-left.svg';

export const StyledForm = styled(Form)`
  /* display: flex; */
  /* justify-content: center; */
`;

export const ContainerCss = styled.div`
  width: ${({ theme }) => theme.spacing(70)}px;
  background-color: white;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
  padding-right: ${({ theme }) => theme.spacing(2)}px;
  border-radius: 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(176);
      }
      return theme.spacing(114.5);
    }}px;
    padding-left: ${({ theme }) => theme.spacing(8)}px;
    padding-right: ${({ theme }) => theme.spacing(8)}px;
    padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  }

  @media screen and (min-width: 1280px) {
    width: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(205.5);
      }
      return theme.spacing(114.5);
    }}px;
    padding-left: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(18.75);
      }
      return theme.spacing(8);
    }}px;
    padding-right: ${({ theme, currentStep, category }) => {
      if (currentStep === 2 && category !== 'my pet') {
        return theme.spacing(18.25);
      }
      return theme.spacing(8);
    }}px;
  }
`;

export const PawIcon = styled(Paw)`
  width: ${({ theme }) => theme.spacing(6)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  fill: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacing(3)}px;
`;

export const ArrowIcon = styled(Arrow)`
  width: ${({ theme }) => theme.spacing(6)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  margin-right: ${({ theme }) => theme.spacing(3)}px;
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
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;
