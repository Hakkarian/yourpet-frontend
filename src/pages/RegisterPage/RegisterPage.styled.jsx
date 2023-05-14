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
  height: 433px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 40px 12px 0px 12px;


  background-color: #fff;

  border-radius: 20px;
  box-shadow: ${({theme}) => theme.shadow.default};
`;

export const FormCss = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  .field {
    display: inline-block;
    width: 250px;
    height: 40px;
  }

  div {
    position: relative;
  }

  div input {
    width: 250px;
    padding: 10px 12px 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 20px;
    font-size: 16px;

    transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  }
  .form-button {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.blue};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  .form-div {
    position: absolute;
    bottom: 0;
    left: 100%;
    tranform: translate(100%, -100%);

    color: red;
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

export const ReusableButtonEye = styled.button`
   position: absolute;
   top: 15%;
   right: 0;
   background-color: transparent;
   border: none;
`

export const ReusableTitleCss = styled(ReusableTitle)`
    margin-top: 0;
    margin-bottom: 30px;

    text-align: center;
`

export const TextWrapCss = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;

  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
`;

export const TextCss = styled.p`
   margin: 0;
`
