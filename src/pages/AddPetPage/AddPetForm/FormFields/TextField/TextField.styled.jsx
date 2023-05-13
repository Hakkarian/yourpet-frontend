import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.spacing(4)}px;
  /* font-weight: 500; */
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

export const Input = styled(Field)`
  width: ${({ theme }) => theme.spacing(66)}px;
  height: ${({ theme, as }) => {
    if (as === 'textarea') {
      return theme.spacing(23);
    }
  }}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(2.375)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2.375)}px;
  border: 1px solid
    ${props => {
      return props.error ? props.theme.colors.red : props.theme.colors.blue;
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
`;

export const TextErrorCss = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`;
