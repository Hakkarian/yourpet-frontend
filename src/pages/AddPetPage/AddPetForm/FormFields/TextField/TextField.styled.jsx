import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  /* @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  } */
`;

export const Input = styled(Field)`
  /* width: ${({ theme }) => theme.spacing(65)}; */
  width: 100%;
  height: ${({ theme, as }) => {
    if (as === 'textarea') {
      return theme.spacing(23);
    }
  }}px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(2.375)};
  padding-bottom: ${({ theme }) => theme.spacing(2.375)};
  border: 1px solid
    ${({ name, errors, touched, theme }) => {
      return errors[name] && touched[name]
        ? theme.colors.red
        : theme.colors.blue;
    }};
  border-radius: ${({ theme, as }) => {
    if (as === 'textarea') {
      return theme.spacing(5);
    }
    return theme.spacing(10);
  }}px;
  font-size: ${({ theme }) => theme.spacing(3.5)};
  ${({ as }) => {
    if (as === 'textarea') {
      return 'resize: none;';
    }
  }}

  /* @media screen and (min-width: 768px) {
    padding-bottom: ${({ theme }) => theme.spacing(3)};
    font-size: ${({ theme }) => theme.spacing(4)};
  } */

  &::-webkit-calendar-picker-indicator {
    margin-right: 20px;
  }
`;

export const TextErrorCss = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  /* @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  } */
`;
