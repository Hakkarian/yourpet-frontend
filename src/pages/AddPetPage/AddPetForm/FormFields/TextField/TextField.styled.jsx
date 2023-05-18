import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)}px;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: ${({ theme, as }) => {
    if (as === 'textarea') {
      return theme.spacing(23);
    }
  }}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(2.375)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2.375)}px;
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
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  ${({ as }) => {
    if (as === 'textarea') {
      return 'resize: none;';
    }
  }}

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(3)}px;
    padding-bottom: ${({ theme }) => theme.spacing(3)}px;
    font-size: ${({ theme }) => theme.spacing(4)}px;

    height: ${({ theme, as, category }) => {
      if (as === 'textarea') {
        switch (category) {
          case 'sell':
            return theme.spacing(20.75);
          case 'my pet':
            return theme.spacing(19.75);
          default:
            return theme.spacing(45.5);
        }
      }
    }}px;
  }

  &::-webkit-calendar-picker-indicator {
    margin-right: 20px;
  }
`;

export const TextErrorCss = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ theme, field }) => {
    if (field === 'textarea') {
      return 0;
    }
    return theme.spacing(5);
  }}px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme, field }) => {
      if (field === 'textarea') {
        return 0;
      }
      return theme.spacing(6);
    }}px;
  }
`;
