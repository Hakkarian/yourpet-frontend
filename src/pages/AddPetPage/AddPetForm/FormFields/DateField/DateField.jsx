import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, Wrapper } from './DateField.styled';
import FormError from '../FormError/FormError';

const DateField = ({ errors, touched, label, name, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        errors={errors}
        touched={touched}
        id={id}
        name={name}
        type="date"
        {...props}
      />
      <FormError name={name} />
    </Wrapper>
  );
};

export default DateField;
