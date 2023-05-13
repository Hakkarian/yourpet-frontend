import { useState, useEffect } from 'react';

import formFields from '../../FormModel/formFields';
import TextField from '../../FormFields/TextField/TextField';
import Button from '../../FormFields/Button/Button';

import { BtnWrapper } from './PersonalDetailsForm.styled';

const PersonalDetailsForm = ({ helpers, changeStep }) => {
  const { setFieldTouched, validateField, isValid, values } = helpers;
  //   console.log(helpers);

  const [next, setNext] = useState(false);
  const [onChangeVAlidation, setOnChangeVAlidation] = useState(false);
  const [first, setFirst] = useState(true);
  const fields = ['title', 'name', 'date', 'breed'];

  const validateForm = async () => {
    for (const field of fields) {
      await setFieldTouched(field, true);
      await validateField(field);
    }
  };

  //   useEffect(() => {
  //     if (next === null) {
  //       return;
  //     }

  //     setNext(true);
  //     setOnChangeVAlidation(true);

  //     if (next && isValid) {
  //       changeStep('next');
  //     }
  //   }, [next, isValid, changeStep]);

  const isFormValid = () => {
    const error = fields.find(field => helpers.errors[field]);
    if (error) {
      return false;
    } else return true;
  };

  const handleNextClick = async evt => {
    setOnChangeVAlidation(true);
    await validateForm();
    console.log('next', next);

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
      setOnChangeVAlidation(false);
      //   await setErrors({});
    }
  };

  function triggerInput(input, enteredValue) {
    // const input = document.getElementById(enteredName);

    const lastValue = input.value;

    input.value = enteredValue;

    const event = new Event('input', { bubbles: true });

    const tracker = input._valueTracker;
    console.dir(tracker);
    if (tracker) {
      tracker.setValue(lastValue);
    }

    input.dispatchEvent(event);
  }

  const handleChangee = async e => {
    helpers.handleChange(e);
    const input = e.currentTarget;
    const value = input.value;
    if (onChangeVAlidation) {
      await validateField('title');
    }
    if (first) {
      setFirst(false);
      triggerInput(input, value);
    }
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <TextField
        onChange={handleChangee}
        id={'my-input'}
        {...formFields.title}
      />
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
