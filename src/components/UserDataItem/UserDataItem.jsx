import PropTypes from 'prop-types';
import { useField } from 'formik';
import {useMemo} from "react";
import { nanoid } from "nanoid";

import {Edit, Input, Wrapper, Label, InputWrap, ErrorBox, Error} from './UserDataItem.styled';

const UserDataItem = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const id = useMemo(() => nanoid(), []);
 
    return (
    <Wrapper>
        <Label key={id}>{label}</Label>
        <InputWrap>
        <Input  {...props} {...field}/>
        <Edit />
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