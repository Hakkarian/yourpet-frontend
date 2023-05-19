import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, Wrapper } from './DateField.styled';
import FormError from '../FormError/FormError';

const DateField = ({ errors, touched, label, name, as, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const maxDate = new Date().toLocaleDateString('fr-ca');

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        errors={errors}
        touched={touched}
        type="date"
        id={id}
        name={name}
        min="1980-01-01"
        max={maxDate}
        {...props}
      />
      <FormError name={name} />
    </Wrapper>
  );
};

export default DateField;
