import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import { AnchorCss, FlexDivCss, FormCss, RegisterCss, ReusableTitleCss, TextCss, TextWrapCss } from './RegisterPage.styled';
import { Link } from 'react-router-dom';
// import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
// import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';

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
                  <button type="button" onClick={() => setOpen(false)}>
                    Close
                  </button>
                ) : (
                  <button type="button" onClick={() => setOpen(true)}>
                    Open
                  </button>
                )}
              </AnchorCss>
              <AnchorCss>
                <Field type="password" name="password" />
                <span>Confirm password</span>
                {open ? (
                  <button type="button" onClick={() => setOpen(false)}>
                    Close
                  </button>
                ) : (
                  <button type="button" onClick={() => setOpen(true)}>
                    Open
                  </button>
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


