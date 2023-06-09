import styled from '@emotion/styled';
import { Form } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import ReusableTitle from 'shared/components/ReusableTitle';
import { font } from 'shared/utils/mixin.styled';
import { Link } from 'react-router-dom';

export const FlexDivCss = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 40px 12px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.default};

  @media screen and (min-width: 768px) {
    padding: 60px 75px;
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

export const FormCss = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;


  div input {
    width: 250px;
    padding: 10px 12px 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 20px;
    font-size: 16px;

    transition: transform 250ms ease-in-out, border 250ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 458px;
    }
  }

  .input-valid {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }

  .input-error {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }

  div input::placeholder {
    font-size: 16px;
  }

  .form-div {
    position: absolute;
    bottom: 0;
    font-size: 12px;
    ${font(null, 1.3, 500, '0.03em', 'red')}
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  font-size: 12px;
  ${font(null, 1.3, 500, '0.03em', 'red')}
`;

export const AnchorCss = styled.div`
  position: relative;
  width: ${({ theme }) => theme.spacing(64)};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(114.5)};
  }
`;

export const LabelCss = styled.label`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0%, -50%);
`;

export const ReusableButtonCss = styled(ReusableButton)`
  width: 100%;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  border: #54adff;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.lightblue};
  }
`;

export const ButtonEye = styled(ReusableButton)`
  min-width: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const AbsDivCss = styled.span`
  position: absolute;
  top: 20%;
  right: 14%;
  cursor: pointer;
  svg path {
    fill: none
  }

  @media screen and (min-width: 768px) {
    right: 8%;
  }
`;

export const ReusableTitleCss = styled(ReusableTitle)`
  margin-top: 0;

  text-align: center;
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: 500;
  line-height: 1.375;

  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-top: 0;
    font-size: ${({ theme }) => theme.spacing(9)};
    line-height: 1.361;
  }
`;

export const TextWrapCss = styled.div`
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
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: underline;
`;
