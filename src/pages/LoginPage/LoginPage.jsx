import React from 'react';
import { CenrteredDiv } from './LoginPage.styled';

import { useState } from 'react';

import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from 'shared/components/Button/Button';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
import { ReactComponent as Cross } from '../../icons/cross-small.svg';

import { login } from 'redux/auth/auth-operations';
import { Link, useNavigate } from 'react-router-dom';
import { FormCss } from 'components/RegisterForm/RegisterForm.styled';
import styled from '@emotion/styled';
import ReusableButton from 'shared/components/ReusableButton';
import ReusableTitle from 'shared/components/ReusableTitle';
import { color, font } from 'shared/utils/mixin.styled';

const validateShecma = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be less than 16 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
    )
    .required('Required'),
});

export const FlexDivCss = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 40px 12px;

  background-color: #fff;

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 60px 75px;
  }
`;

export const InputEmail = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;

  ::placeholder {
  }
  :focus {
    outline: none;
  }
`;
export const InputPassword = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;

  ::placeholder {
  }
  :focus {
    outline: none;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
export const Text = styled.p`
  line-height: 16px;

  margin-top: 20px;
`;
export const StyledLink = styled(Link)``;
export const Error = styled.p`
  padding-left: 12px;
  margin-top: 4px;
`;
export const Lable = styled.label`
  position: relative;
`;
export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 17px;
  top: 17px;
  transform: translate(35%, -35%);
`;
export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const ButtonEye = styled.button`
  min-width: 0;
  position: absolute;
  top: 17%;
  right: 0;
  background-color: transparent;
  border: none;
`;

export const AnchorCss = styled.div`
  position: relative;
`;

export const LabelCss = styled.label`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0%, -50%);
`;

export const ReusableButtonCss = styled(ReusableButton)`
  width: 100%;

  ${color('#fff', ({ theme }) => theme.colors.blue)}
`;
export const AbsDivCss = styled.span`
  position: absolute;
  top: 17%;
  right: 10%;
`;

export const ReusableTitleCss = styled(ReusableTitle)`
  margin-top: 0;
  margin-bottom: 30px;

  text-align: center;

  font-weight: 500;
  line-height: 1.375;

  @media screen and (min-width: 768px) {
    margin-top: 0;
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
`;

export const ErrorText = styled.div`
  position: absolute;
  font-size: 12px;
  ${font(null, 1.3, 500, '0.03em', 'red')}
`;

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const payload = { email, password };
    console.log('submit');
    dispatch(login(payload));
    navigate('/user');
    actions.resetForm();
  };
  return (
    <CenrteredDiv>
      <FlexDivCss>
        <ReusableTitleCss>Login</ReusableTitleCss>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validateShecma}
          onSubmit={handleSubmit}
        >
          {({ errors, values, touched }) => {
            return (
              <FormCss>
                <AnchorCss>
                  <Field
                    name="email"
                    type="email"
                    className={errors.email ? 'input-error' : 'input-valid'}
                  />
                  <ErrorText>
                    <ErrorMessage name="email" />
                  </ErrorText>
                  {errors.email && (
                    <AbsDivCss>
                      <Cross width="24" height="24" stroke="#F43F5E" />
                    </AbsDivCss>
                  )}
                </AnchorCss>
                <AnchorCss>
                  <Field
                    className={errors.password ? 'input-error' : 'input-valid'}
                    name="password"
                    type={open ? 'text' : 'password'}
                  />
                  <ErrorText>
                    <ErrorMessage name="password" />
                  </ErrorText>

                  {open ? (
                    <ButtonEye
                      className="eye-button"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      <EyeOpen width="24" height="24" />
                    </ButtonEye>
                  ) : (
                    <ButtonEye type="button" onClick={() => setOpen(true)}>
                      <EyeClosed width="24" height="24" />
                    </ButtonEye>
                  )}
                  {errors.password && (
                    <AbsDivCss>
                      <Cross width="24" height="24" stroke="#F43F5E" />
                    </AbsDivCss>
                  )}
                </AnchorCss>
                <Button className="form-button" type="submit">
                  Submit
                </Button>
                <TextWrapCss>
                  <TextCss>Don't have an account?</TextCss>
                  <Link to="/register">Register</Link>
                </TextWrapCss>
              </FormCss>
            );
          }}
        </Formik>
      </FlexDivCss>
    </CenrteredDiv>
  );
};

export default LoginPage;
