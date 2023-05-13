import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, Wrapper } from './TextField.styled';
import { FormError } from '../../AddPetForm';

const TextField = ({ errors, label, name, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} {...props} />
      <FormError name={name} />
    </Wrapper>
  );
};

export default TextField;
