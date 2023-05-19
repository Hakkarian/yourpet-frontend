import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { useField } from 'formik';
import {useMemo} from "react";
import { nanoid } from "nanoid";
import { info } from 'redux/auth/auth-operations';

import {Edit, EditButton, Input, Wrapper, Label, InputWrap, ErrorBox, Error, CheckIcon} from './UserDataItem.styled';

const UserDataItem = ({label, errors, ...props}) => {
  const dispatch = useDispatch();
   const [isEdit, setIsEdit] = useState(false);
   const [isCheck, setIsCheck] = useState(false);
    const [field, meta] = useField(props);
    const id = useMemo(() => nanoid(), []);

    const onEditBtn = () => {
      setIsEdit(true);
      setIsCheck(false);
      setTimeout(() => {
        setIsCheck(true);
      }, 6000);
    };

    const checkData = () => {
      console.log(meta.value);
      dispatch(info(meta.value));
      console.log(meta);
      console.log(field);
    };
 
    return (
    <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <InputWrap>
        {isEdit ? <Input autoComplete={label} {...props} {...field} id={id}/> : <Input autoComplete={label} {...props} id={id} {...field} readOnly/> }
        {isCheck ? <EditButton type='button' onClick={event => checkData(event.currentTarget.value)}><CheckIcon /></EditButton> : (
          <EditButton type="button" onClick={onEditBtn}><Edit /></EditButton>
        )}
        </InputWrap>
        <ErrorBox>
        {meta.touched && meta.error ? (
          <Error>{meta.error}</Error>
        ) : null}
      </ErrorBox>
    </Wrapper>
    );
};

// UserDataItem.propTypes = {
//     label: PropTypes.string.isRequired,
//     handleChange: PropTypes.func,
// };

export default UserDataItem;