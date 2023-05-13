import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { FormError } from '../../AddPetForm';

import { CustomInput, CustomLabel } from './FileInput.styled';

const FileInput = ({ onChange, name }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div>
      <CustomLabel htmlFor={id}></CustomLabel>
      <div>
        <CustomInput type="file" name={name} id={id} onChange={onChange} />
        <FormError name={name} />
      </div>
    </div>
  );
};

export default FileInput;
