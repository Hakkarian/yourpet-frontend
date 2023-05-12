import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import { AnchorCss, FlexDivCss, FormCss, RegisterCss, ReusableTitleCss } from './RegisterPage.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!')
})

const RegisterPage = () => {
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
              <AnchorCss>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" />
                <ErrorMessage name="email"></ErrorMessage>
              </AnchorCss>
              <AnchorCss>
                <label htmlFor="password">Password</label>
                <Field type="text" name="password" />
                <ErrorMessage name="password"></ErrorMessage>
              </AnchorCss>
              <AnchorCss>
                <label htmlFor="password">Confirm password</label>
                <Field type="text" name="password" />
                <ErrorMessage name="password"></ErrorMessage>
              </AnchorCss>
              <ReusableButton type="submit" disabled={isSubmitting}>
                Register
              </ReusableButton>
            </FormCss>
          )}
        </Formik>
      </FlexDivCss>
    </RegisterCss>
  );
}

export default RegisterPage;


