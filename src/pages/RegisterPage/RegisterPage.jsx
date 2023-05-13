import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import { AnchorCss, FlexDivCss, FormCss, RegisterCss, ReusableButtonEye, ReusableTitleCss, TextCss, TextWrapCss } from './RegisterPage.styled';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!')
})

const RegisterPage = () => {
  const [open, setOpen] = useState(true);
  const initialState = {
    email: '',
    password: ''
  }

  const handleSubmit = ({ setSubmitting }) => {
    setSubmitting(false)
  }


  return (
    <RegisterCss>
      <FlexDivCss>
        <ReusableTitleCss>Register</ReusableTitleCss>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormCss>
              <AnchorCss className="wraps">
                <Field type="text" name="email" />
                <span>Email</span>
              </AnchorCss>
              <AnchorCss>
                <Field type={open ? 'text' : 'password'} name="password" />
                <span>Password</span>
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
              <AnchorCss>
                <Field type="password" name="password" />
                <span>Confirm password</span>
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
              <ReusableButton type="submit" disabled={isSubmitting}>
                Register
              </ReusableButton>
              <TextWrapCss>
                <TextCss>Forgot an account?</TextCss>
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


