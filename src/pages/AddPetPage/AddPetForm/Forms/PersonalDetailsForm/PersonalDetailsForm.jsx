import { useState, useEffect } from 'react';

import formFields from '../../FormModel/formFields';
import TextField from '../../FormFields/TextField/TextField';
import Button from '../../FormFields/Button/Button';

import { BtnWrapper } from './PersonalDetailsForm.styled';

const PersonalDetailsForm = ({ helpers, changeStep }) => {
  const { setFieldTouched, validateField, isValid } = helpers;

  const [next, setNext] = useState(null);
  const fields = ['title', 'name', 'date', 'breed'];

  const validateForm = async () => {
    for (const field of fields) {
      await setFieldTouched(field, true);
      await validateField(field);
    }
  };

  useEffect(() => {
    if (next === null) {
      return;
    }

    setNext(true);

    if (next && isValid) {
      changeStep('next');
    }
  }, [next, isValid, changeStep]);

  const handleNextClick = async () => {
    await validateForm();
    setNext(false);
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
