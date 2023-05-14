import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import { AnchorCss, FlexDivCss, FormCss, RegisterCss, ReusableButtonEye, ReusableTitleCss, TextCss, TextWrapCss } from './RegisterPage.styled';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/auth-operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string().when("password", {
    is: val => (val && val.length > 0) ? true : false,
    then: Yup.string().oneOf([Yup.ref("password")], "Both password must be the same")
  })
})

const RegisterPage = () => {
  const [open, setOpen] = useState(true);
  // const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = ({ setSubmitting }) => {

    // dispatch(register(values))
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
          {({ values, errors, handleBlur, handleChange, isSubmitting }) => (
            <FormCss>
              <AnchorCss className="wraps">
                <Field type="text" name="email" placeholder="Email..." />
              </AnchorCss>
              <AnchorCss>
                <Field
                  type={open ? 'text' : 'password'}
                  name="password"
                  placeholder="Password..."
                  onChange={handleChange}
                  value={values.password}
                />
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
              <span style={{ color: 'red' }}>{errors.password}</span>
              <AnchorCss>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password..."
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {open ? (
                  <ReusableButtonEye onClick={() => setOpen(false)}>
                    <EyeOpen width="24" height="24" />
                  </ReusableButtonEye>
                ) : (
                  <ReusableButtonEye onClick={() => setOpen(true)}>
                    <EyeClosed width="24" height="24" />
                  </ReusableButtonEye>
                )}
                <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
              </AnchorCss>
              <ReusableButton
                className="form"
                type="submit"
                disabled={isSubmitting}
              >
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


