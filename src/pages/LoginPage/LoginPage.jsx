import React from 'react';
import { CenrteredDiv } from './LoginPage.styled';

import { useState } from 'react';

import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from 'shared/components/Button/Button';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
import { ReactComponent as Cross } from '../../icons/cross-small.svg';

import { login } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import {
  FormCss,
  AnchorCss,
  RelativeDiv,
  AbsDivCss,
  ButtonEye,
  FlexDivCss,
  ReusableTitleCss,
  TextWrapCss,
  TextCss,
  StyledLink,
} from 'components/RegisterForm/RegisterForm.styled';
import FormError from 'pages/AddPetPage/AddPetForm/FormFields/FormError/FormError';

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
          initialValues={{ email: '', password: '' }}
          validateOnBlur={false}
          validateOnMount={false}
          validationSchema={validateShecma}
          onSubmit={handleSubmit}
        >
          {({ errors, values, touched, setFieldValue }) => {
            return (
              <FormCss>
                <AnchorCss>
                  <RelativeDiv>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className={
                        errors.email && touched.email
                          ? 'input-error'
                          : 'input-valid'
                      }
                    />
                    {errors.email && values.email && (
                      <AbsDivCss
                        onClick={() => {
                          setFieldValue('email', '');
                        }}
                      >
                        <Cross width="24" height="24" stroke="#F43F5E" />
                      </AbsDivCss>
                    )}
                  </RelativeDiv>
                  <FormError name="email" />
                </AnchorCss>

                <AnchorCss>
                  <RelativeDiv>
                    <Field
                      className={
                        errors.password && touched.password
                          ? 'input-error'
                          : 'input-valid'
                      }
                      name="password"
                      placeholder="Password"
                      type={open ? 'text' : 'password'}
                    />
                    {errors.password && values.password && (
                      <AbsDivCss
                        onClick={() => {
                          setFieldValue('password', '');
                        }}
                      >
                        <Cross width="24" height="24" stroke="#F43F5E" />
                      </AbsDivCss>
                    )}
                  </RelativeDiv>
                  <FormError name="password" />
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
                </AnchorCss>

                <Button className="form-button" type="submit">
                  Submit
                </Button>
                <TextWrapCss>
                  <TextCss>Don't have an account?</TextCss>
                  <StyledLink to="/register">Register</StyledLink>
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
