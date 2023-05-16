import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, Wrapper } from './TextField.styled';
import FormError from '../FormError/FormError';

const TextField = ({ errors, touched, label, name, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input errors={errors} touched={touched} id={id} name={name} {...props} />
      <FormError name={name} />
    </Wrapper>
  );
};

export default TextField;
