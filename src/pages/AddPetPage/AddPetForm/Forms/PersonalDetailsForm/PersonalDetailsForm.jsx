import formFields from '../../FormModel/formFields';
import validationSchema from '../../FormModel/validationSchema';

import TextField from '../../FormFields/TextField/TextField';
import Button from '../../FormFields/Button/Button';

import { PawIcon, ArrowIcon, BtnWrapper } from '../../AddPetForm.styled';

const PersonalDetailsForm = ({ helpers, changeStep, category }) => {
  const { errors, setErrors, touched, values, setFieldTouched } = helpers;
  const fields =
    category === 'my pet'
      ? ['name', 'birthday', 'breed']
      : ['title', 'name', 'birthday', 'breed'];

  const validateForm = () => {
    const formErrors = {};
    try {
      validationSchema.validateSync(values, {
        abortEarly: false,
      });
    } catch (error) {
      error.inner.map(err => {
        if (fields.includes(err.path)) {
          formErrors[err.path] = err.errors[0];
        }
        return err;
      });
    }
    return formErrors;
  };

  const handleNextClick = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      changeStep('next');
    } else {
      await setErrors(errors);
      for (const field of fields) {
        if (touched[field]) continue;
        await setFieldTouched(field, true);
      }
    }
  };
  return (
    <div>
      {category !== 'my pet' && (
        <TextField errors={errors} touched={touched} {...formFields.title} />
      )}
      <TextField errors={errors} touched={touched} {...formFields.name} />
      <TextField errors={errors} touched={touched} {...formFields.birthday} />
      <TextField errors={errors} touched={touched} {...formFields.breed} />

      <BtnWrapper>
        <Button
          width={248}
          onClick={evt => {
            handleNextClick(evt);
          }}
        >
          Next
          <PawIcon />
        </Button>
        <Button
          width={248}
          transparent={true}
          onClick={() => changeStep('back')}
        >
          <ArrowIcon />
          Back
        </Button>
      </BtnWrapper>
    </div>
  );
};

export default PersonalDetailsForm;
