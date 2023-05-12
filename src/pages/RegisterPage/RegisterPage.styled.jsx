import styled from '@emotion/styled';
import ReusableButton from 'shared/components/ReusableButton';
import { Form } from 'formik';
import { ReusableTitle } from 'shared/components/ReusableTitle/ReusableTitle';

export const RegisterCss = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexDivCss = styled.div`
  width: 280px;
  height: 473px;
  padding: 40px 12px;


  background-color: #fff;
`;

export const FormCss = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  label {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0%, -50%);
    transition: transform 250ms ease-in-out;
  }

  input {
    width: ${({ theme }) => theme.spacing(64)}px;
    height: ${({ theme }) => theme.spacing(12)}px;

    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.spacing(10)}px;
  }
  input:focus + label {
    transform: translate(0%, 150%);
  }
`;

export const AnchorCss = styled.div`
    position: relative;
`

export const LabelCss = styled.label`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0%, -50%)
`

export const ReusableButtonCss = styled(ReusableButton)`
    background-color: ${({ theme }) => theme.colors.blue};
    color: #fff;
`;

export const ReusableTitleCss = styled(ReusableTitle)`
    margin-top: 0;
    margin-bottom: 50px;

    text-align: center;
`

