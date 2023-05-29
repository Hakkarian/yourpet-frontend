import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from 'redux/auth/auth-operations';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

import FormError from 'pages/AddPetPage/AddPetForm/FormFields/FormError/FormError';

import {
  AbsDivCss,
  AnchorCss,
  ButtonEye,
  FlexDivCss,
  FormCss,
  ReusableTitleCss,
  TextCss,
  TextWrapCss,
  RelativeDiv,
  StyledLink,
} from './RegisterForm.styled';
import Button from 'shared/components/Button/Button';
import { ReactComponent as Correct } from '../../icons/check.svg';
import { ReactComponent as Cross } from '../../icons/cross-small.svg';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
// import GoogleAuthentication from 'components/GoogleAuthentication';


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be less than 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,16})/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegisterForm = () => {
  const [open, setOpen] = useState({
    passwordEye: false,
    confirmPasswordEye: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const payload = { email, password };
    dispatch(register(payload))
      .then(() => {
        dispatch(login(payload));
        navigate('/user');
      })
      .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <FlexDivCss>
      <ReusableTitleCss>Registration</ReusableTitleCss>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnMount={false}
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
                  {!errors.email && values.email && (
                    <>
                      <AbsDivCss
                        onClick={() => {
                          setFieldValue('password', '');
                        }}
                      >
                        <Correct width="24" height="24" stroke="#00C3AD" />
                      </AbsDivCss>
                    </>
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
                    type={open.passwordEye ? 'text' : 'password'}
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
                  {!errors.password && values.password && (
                    <>
                      <AbsDivCss
                        onClick={() => {
                          setFieldValue('password', '');
                        }}
                      >
                        <Correct width="24" height="24" stroke="#00C3AD" />
                      </AbsDivCss>
                    </>
                  )}
                </RelativeDiv>
                <FormError name="password" />

                {open.passwordEye ? (
                  <ButtonEye
                    type="button"
                    onClick={() => setOpen({ ...open, passwordEye: false })}
                  >
                    <EyeOpen width="24" height="24" />
                  </ButtonEye>
                ) : (
                  <ButtonEye
                    type="button"
                    onClick={() => setOpen({ ...open, passwordEye: true })}
                  >
                    <EyeClosed width="24" height="24" />
                  </ButtonEye>
                )}
              </AnchorCss>

              <AnchorCss>
                <RelativeDiv>
                  <Field
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? 'input-error'
                        : 'input-valid'
                    }
                    name="confirmPassword"
                    type={open.confirmPasswordEye ? 'text' : 'password'}
                    placeholder="Confirm password"
                  />
                  {errors.confirmPassword && values.confirmPassword && (
                    <AbsDivCss
                      onClick={() => {
                        setFieldValue('confirmPassword', '');
                      }}
                    >
                      <Cross width="24" height="24" stroke="#F43F5E" />
                    </AbsDivCss>
                  )}
                  {!errors.confirmPassword && values.confirmPassword && (
                    <>
                      <AbsDivCss
                        onClick={() => {
                          setFieldValue('password', '');
                        }}
                      >
                        <Correct width="24" height="24" stroke="#00C3AD" />
                      </AbsDivCss>
                    </>
                  )}
                </RelativeDiv>
                <FormError name="confirmPassword" />
                {open.confirmPasswordEye ? (
                  <ButtonEye
                    type="button"
                    onClick={() =>
                      setOpen({ ...open, confirmPasswordEye: false })
                    }
                  >
                    <EyeOpen width="24" height="24" fill="none" />
                  </ButtonEye>
                ) : (
                  <ButtonEye
                    type="button"
                    onClick={() =>
                      setOpen({ ...open, confirmPasswordEye: true })
                    }
                  >
                    <EyeClosed
                      width="24"
                      height="24"
                      stroke="#54ADFF"
                      fill="none"
                    />
                  </ButtonEye>
                )}
              </AnchorCss>
              <Button className="form-button" type="submit">
                Submit
              </Button>
              <TextWrapCss>
                <TextCss>Already have an account?</TextCss>
                <StyledLink to="/login">Login</StyledLink>
              </TextWrapCss>
              {/* <TextWrapCss>
                  <TextCss>Or sign in with Google!</TextCss>
                  <GoogleAuthentication />
                </TextWrapCss> */}
            </FormCss>
          );
        }}
      </Formik>
    </FlexDivCss>
  );
};

export default RegisterForm;
