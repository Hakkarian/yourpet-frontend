import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { RadioInput, RadioLabel } from './RadioButtonField.styled';

const RadioButtonField = ({ name, label, value }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <RadioInput id={id} type="radio" name={name} value={value} />
      <RadioLabel htmlFor={id} name={name}>
        {label}
      </RadioLabel>
    </div>
  );
};

export default RadioButtonField;
