import { useState } from 'react';

import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {
  Forms,
  InputEmail,
  InputContainer,
  Lable,
  InputPassword,
} from './FormStyles';

import Button from 'shared/components/Button/Button';
import Title from 'shared/components/ReusableTitle';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';

import { login } from 'redux/auth/auth-operations';

import { ButtonEye } from 'pages/RegisterPage/RegisterPage.styled';

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
  const [open, setOpen] = useState(false);



  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/notices/sell');
  //   }
  // }, []);

  const dispatch = useDispatch();
  // const validateEmail = value => {
  //   let error;
  //   if (!value) {
  //     error = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
  //     error = 'Invalid email address';
  //   }
  //   return error;
  // };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      }}
      validationSchema={validateShecma}
    >
      {({ errors }) => (
        <Forms>
          <Title
            as="p"
            weight="500"
            tabSize="36"
            tabLine="1.36"
            tabweight="500"
            deskWeight="500"
            deskSize="36"
            deskLine="1.36"
          >
            Login
          </Title>
          <InputContainer>
            <Lable>
              <InputEmail
                type="text"
                name="email"
                placeholder="Email"
                error={errors.email ? '#f43f5e' : '#54adff'}
              />
            </Lable>
            <Lable>
              <InputPassword
                type={open ? 'text' : 'password'}
                name={'password'}
                placeholder={'Password'}
              />
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
            </Lable>
          </InputContainer>
          <Button shape={'solid'} w={'100%'} h={'48'}>
            Login
          </Button>
          {/* <Text>
            Don't have an account?
            <StyledLink to={'/register'}>Register</StyledLink>
          </Text> */}
        </Forms>
      )}
    </Formik>
  );
};

export default LoginForm;