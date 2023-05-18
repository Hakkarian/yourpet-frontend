import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, Wrapper } from './TextField.styled';
import FormError from '../FormError/FormError';

const TextField = ({ errors, touched, label, name, as, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Wrapper field={as}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        errors={errors}
        touched={touched}
        id={id}
        name={name}
        as={as}
        {...props}
      />
      <FormError name={name} />
    </Wrapper>
  );
};

export default TextField;
