import { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import {useMemo} from "react";
import { nanoid } from "nanoid";

import {Edit, EditButton, Input, Wrapper, Label, InputWrap, ErrorBox, Error} from './UserDataItem.styled';
import { CheckIcon } from 'components/UserData/UserData.styled';

const UserDataItem = ({label, ...props}) => {
   const [isEdit, setIsEdit] = useState(false);
   const [isCheck, setIsCheck] = useState(false);
    const [field, meta] = useField(props);
    const id = useMemo(() => nanoid(), []);

    const onEditBtn = () => {
      setIsEdit(true);
      setIsCheck(false);
      setTimeout(() => {
        setIsCheck(true);
      }, 7000);
    };

    const checkData = (value) => {
    };
 
    return (
    <Wrapper>
        <Label key={id}>{label}</Label>
        <InputWrap>
        {isEdit ? <Input {...props} {...field}/> : <Input  {...props} {...field} readOnly /> }
        {isCheck ? <EditButton type='button' onClick={event => checkData(event.currentTarget.name)}><CheckIcon /></EditButton> : (
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

UserDataItem.propTypes = {
    label: PropTypes.string.isRequired,
};

export default UserDataItem;