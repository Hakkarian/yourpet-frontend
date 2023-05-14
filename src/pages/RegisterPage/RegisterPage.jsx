import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import { AnchorCss, FlexDivCss, FormCss, RegisterCss, ReusableButtonEye, ReusableTitleCss, TextCss, TextWrapCss } from './RegisterPage.styled';

import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
import { register } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/auth-operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegisterPage = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values)
    dispatch(register(values))
    console.log('success')
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
                <Field name="password" type="password" />
                <div className="form-div">
                  <ErrorMessage name="password" />
                </div>
                {open ? (
                  <ReusableButtonEye onClick={() => setOpen(false)}>
                    <EyeOpen width="24" height="24" />
                  </ReusableButtonEye>
                ) : (
                  <ReusableButtonEye onClick={() => setOpen(true)}>
                    <EyeClosed width="24" height="24" />
                  </ReusableButtonEye>
                )}
              </div>
              <AnchorCss>
                <Field name="confirmPassword" type="password" />
                <div className="form-div">
                  <ErrorMessage name="confirmPassword" />
                </div>
                {open ? (
                  <ReusableButtonEye onClick={() => setOpen(false)}>
                    <EyeOpen width="24" height="24" />
                  </ReusableButtonEye>
                ) : (
                  <ReusableButtonEye onClick={() => setOpen(true)}>
                    <EyeClosed width="24" height="24" />
                  </ReusableButtonEye>
                )}
              </AnchorCss>
              <ReusableButton className="form-button" type="submit">
                Submit
              </ReusableButton>
              <TextWrapCss>
                <TextCss>Already have an account?</TextCss>
                <Link to='/login'>Login</Link>
              </TextWrapCss>
            </FormCss>
          )}
        </Formik>
      </FlexDivCss>
    </RegisterCss>
  );
}

export default RegisterPage;

