// import { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {
  // AbsDivCss,
  ReusableTitleCss,
  FlexDivCss,
  // TextWrapCss,
  // TextCss,
  // ButtonEye,
  // ErrorText,
} from './FormStyles.styled';

// import Button from 'shared/components/Button/Button';
// import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
// import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';
// import { ReactComponent as Cross } from '../../icons/cross-small.svg';

import { login } from 'redux/auth/auth-operations';
// import { Link } from 'react-router-dom';
import { FormCss } from 'components/RegisterForm/RegisterForm.styled';

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
const LoginForm = () => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const payload = { email, password };
    console.log('submit');
    dispatch(login(payload));
    actions.resetForm();
  };
  return (
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
              {/* <div>
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
              </div>
              <div style={{position: 'relative'}}>
                <Field
                  className={errors.password ? 'input-error' : 'input-valid'}
                  name="password"
                  type={open ? 'text' : 'password'}
                />
                <ErrorText>
                  <ErrorMessage name="password" />
                </ErrorText>

                {open ? (
                  <ButtonEye className='eye-button'
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    <EyeOpen width="24" height="24" />
                  </ButtonEye>
                ) : (
                  <ButtonEye
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    <EyeClosed width="24" height="24" />
                  </ButtonEye>
                )}
                {errors.password && (
                  <AbsDivCss>
                    <Cross width="24" height="24" stroke="#F43F5E" />
                  </AbsDivCss>
                )}
              </div>
              <Button className="form-button" type="submit">
                Submit
              </Button>
              <TextWrapCss>
                <TextCss>Don't have an account?</TextCss>
                <Link to="/register">Register</Link>
              </TextWrapCss> */}
            </FormCss>
          );
        }}
      </Formik>
    </FlexDivCss>
  );
};
export default LoginForm;