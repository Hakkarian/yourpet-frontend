import styled from '@emotion/styled';
import { Field } from 'formik';

export const RadioInput = styled(Field)`
  opacity: 0;
  position: fixed;
  width: 0;

  &:checked + label {
    background-color: ${({ theme, name }) => {
      if (name === 'category') {
        return theme.colors.blue;
      }
      return 'transparent';
    }};

    color: ${({ theme, name }) => {
      if (name === 'category') {
        return theme.colors.white;
      }
      return theme.colors.green;
    }};
  }
`;

export const RadioLabel = styled.label`
  /* display: inline-block; */
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme, name }) => {
    if (name === 'category') {
      return theme.colors.lightblue;
    }
    return 'transparent';
  }};
  color: ${({ theme, name }) => {
    if (name === 'category') {
      return theme.colors.blue;
    }
    return '#888888';
  }};
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  font-family: inherit;
  font-size: ${({ theme, name }) => {
    if (name === 'category') {
      return theme.spacing(3.5);
    }
    return theme.spacing(4);
  }}px;
  font-weight: ${({ name }) => {
    if (name === 'category') {
      return 500;
    }
    return 400;
  }};
  border: none;
  border-radius: 40px;

  svg {
    fill: transparent;
  }

  svg > path {
    stroke: ${({ theme, fill }) => theme.colors[fill]};
  }

  &:hover {
    cursor: pointer;
  }
`;
