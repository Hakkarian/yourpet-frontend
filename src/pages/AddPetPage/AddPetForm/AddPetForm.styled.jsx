import styled from '@emotion/styled';

import { Form } from 'formik';

import { ReactComponent as Paw } from 'icons/paw.svg';
import { ReactComponent as Arrow } from 'icons/arrow-left.svg';

export const StyledForm = styled(Form)`
  /* display: flex; */
  /* justify-content: center; */
`;

export const ContainerCss = styled.div`
  width: 280px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 40px;
  margin: 0 auto;
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
  margin-top: ${({ theme }) => theme.spacing(6)}px;
  margin-left: auto;
  margin-right: auto;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;
