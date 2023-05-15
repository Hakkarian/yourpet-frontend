import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import FormError from '../FormError/FormError';

import { CustomInput, CustomLabel, FilePreview } from './FileInput.styled';

const FileInput = ({ onChange, name, photo }) => {
  const id = useMemo(() => nanoid(), []);
  let photoUrl = null;
  if (photo) {
    photoUrl = URL.createObjectURL(photo);
  }
  return (
    <div>
      <CustomLabel htmlFor={id}>
        <FilePreview src={photoUrl} photoUrl={photoUrl} />
      </CustomLabel>
      <div>
        <CustomInput type="file" name={name} id={id} onChange={onChange} />
        <FormError name={name} />
      </div>
    </div>
  );
};

export default FileInput;
