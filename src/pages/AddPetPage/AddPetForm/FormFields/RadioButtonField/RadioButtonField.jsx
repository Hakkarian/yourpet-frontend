import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { RadioInput, RadioLabel } from './RadioButtonField.styled';

const RadioButtonField = ({
  name,
  label,
  value,
  icon: Icon,
  fill,
  padding,
}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <RadioInput id={id} type="radio" name={name} value={value} />
      <RadioLabel htmlFor={id} name={name} fill={fill} padding={padding}>
        {Icon && <Icon width={24} height={24} />}

        {label}
      </RadioLabel>
    </div>
  );
};

export default RadioButtonField;
