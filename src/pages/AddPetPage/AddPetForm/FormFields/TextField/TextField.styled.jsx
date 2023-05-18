import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: ${({ theme, as }) => {
    if (as === 'textarea') {
      return theme.spacing(23);
    }
  }};
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
  }};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  ${({ as }) => {
    if (as === 'textarea') {
      return 'resize: none;';
    }
  }}

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(3)};
    padding-bottom: ${({ theme }) => theme.spacing(3)};
    font-size: ${({ theme }) => theme.spacing(4)};

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
    }};
  }

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
  margin-bottom: ${({ theme, field }) => {
    if (field === 'textarea') {
      return 0;
    }
    return theme.spacing(5);
  }};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme, field }) => {
      if (field === 'textarea') {
        return 0;
      }
      return theme.spacing(6);
    }};
  }
`;
