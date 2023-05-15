import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';

import { AnchorCss, ButtonEye, FlexDivCss, FormCss, RegisterCss, ReusableTitleCss, TextCss, TextWrapCss } from './RegisterPage.styled';

import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
import { register } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button/Button';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/auth-operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be less than 16 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegisterPage = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const payload = { email, password };
    console.log(payload);
    dispatch(register(payload));
    actions.resetForm();
  }
  return (
    <RegisterCss>
      <FlexDivCss>
        <ReusableTitleCss>Register</ReusableTitleCss>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          
        >
          {({ errors, touched }) => (
            <FormCss>
              <div>
                <Field name="email" type="email" />
                <div className="form-div">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div>
                <Field name="password" type={open ? 'text' : 'password'} />
                <div className="form-div">
                  <ErrorMessage name="password" />
                </div>
                {open ? (
                  <ButtonEye type="button" onClick={() => setOpen(false)}>
                    <EyeOpen width="24" height="24" />
                  </ButtonEye>
                ) : (
                  <ButtonEye type="button" onClick={() => setOpen(true)}>
                    <EyeClosed width="24" height="24" />
                  </ButtonEye>
                )}
              </div>
              <AnchorCss>
                <Field
                  name="confirmPassword"
                  type={open ? 'text' : 'password'}
                />
                <div className="form-div">
                  <ErrorMessage name="confirmPassword" />
                </div>
                {open ? (
                  <ButtonEye type="button" onClick={() => setOpen(false)}>
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
                <TextCss>Already have an account?</TextCss>
                <Link to="/login">Login</Link>
              </TextWrapCss>
            </FormCss>
          )}
        </Formik>
      </FlexDivCss>
    </RegisterCss>
  );
}

export default RegisterPage;

