import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { register } from "redux/auth/auth-operations";
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';

import { AbsDivCss, AnchorCss, ButtonEye, ErrorText, FlexDivCss, FormCss, ReusableTitleCss, TextCss, TextWrapCss } from "./RegisterForm.styled";
import Button from 'shared/components/Button/Button';

import { ReactComponent as Cross } from '../../icons/cross-small.svg';
import { ReactComponent as EyeOpen } from '../../icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../icons/eye-closed.svg';


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


const RegisterForm = () => {
    const [open, setOpen] = useState({
      passwordEye: false,
      confirmPasswordEye: false,
    });
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      const { email, password } = values;
      const payload = { email, password };
      dispatch(register(payload));
      actions.resetForm();
    };
    return (
      <FlexDivCss>
        <ReusableTitleCss>Register</ReusableTitleCss>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, values, touched }) => {
            return (
              <FormCss>
                <div>
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
                <div>
                  <Field
                    className={errors.password ? 'input-error' : 'input-valid'}
                    name="password"
                    type={open.passwordEye ? 'text' : 'password'}
                  />
                  <ErrorText>
                    <ErrorMessage name="password" />
                  </ErrorText>

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
                  {errors.password && (
                    <AbsDivCss>
                      <Cross width="24" height="24" stroke="#F43F5E" />
                    </AbsDivCss>
                  )}
                </div>
                <AnchorCss>
                  <Field
                    className={
                      errors.confirmPassword ? 'input-error' : 'input-valid'
                    }
                    name="confirmPassword"
                    type={open.confirmPasswordEye ? 'text' : 'password'}
                  />
                  <ErrorText>
                    <ErrorMessage className="form-div" name="confirmPassword" />
                  </ErrorText>
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
                      <EyeClosed width="24" height="24" stroke="#54ADFF" fill="none" />
                    </ButtonEye>
                  )}
                  {errors.confirmPassword && (
                    <AbsDivCss>
                      <Cross width="24" height="24" stroke="#F43F5E" />
                    </AbsDivCss>
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
            );
          }}
        </Formik>
      </FlexDivCss>
    );
}

export default RegisterForm;
