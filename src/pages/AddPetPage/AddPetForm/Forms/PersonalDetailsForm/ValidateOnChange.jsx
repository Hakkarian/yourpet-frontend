import { useState } from 'react';

import formFields from '../../FormModel/formFields';
import TextField from '../../FormFields/TextField/TextField';
import Button from '../../FormFields/Button/Button';

import { BtnWrapper } from './PersonalDetailsForm.styled';

const PersonalDetailsForm = ({ helpers, changeStep }) => {
  const { setFieldTouched, validateField, errors } = helpers;

  const [next, setNext] = useState(false);
  const fields = ['title', 'name', 'date', 'breed'];

  const validateForm = async () => {
    for (const field of fields) {
      await setFieldTouched(field, true);
      await validateField(field);
    }
  };

  const isFormValid = () => {
    const error = fields.find(field => errors[field]);
    if (error) {
      return false;
    } else return true;
  };

  const handleNextClick = async evt => {
    await validateForm();

    if (next === false) {
      setNext(true);
      const btn = document.getElementById('test');
      if (!btn) {
        setNext(false);
        return;
      }
      btn?.click();
    }

    if (next && isFormValid()) {
      changeStep('next');
      setNext(false);
      //   await setErrors({});
    }
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <TextField {...formFields.title} />
      <TextField {...formFields.name} />
      <TextField {...formFields.date} />
      <TextField {...formFields.breed} />

      <BtnWrapper>
        <Button
          id="test"
          width={248}
          onClick={evt => {
            handleNextClick(evt);
          }}
        >
          Next
        </Button>
        <Button
          width={248}
          transparent={true}
          onClick={() => changeStep('back')}
        >
          Back
        </Button>
      </BtnWrapper>
    </div>
  );
};

export default PersonalDetailsForm;
