import { useState } from 'react';

import { Formik } from 'formik';
import Title from 'pages/AddPetPage/AddPetForm/FormFields/Title/Title';
import { StyledForm } from './AddPetForm.styled';

import initialValues from './FormModel/formInitualValues';
import validationSchema from './FormModel/validationSchema';

import Stepper from './Stepper/Stepper';
import ChooseOptionForm from './Forms/ChooseOptionForm/ChooseOptionForm';
import PersonalDetailsForm from './Forms/PersonalDetailsForm/PersonalDetailsForm';
import MoreInfoForm from './Forms/MoreInfoForm/MoreInfoForm';

const AddPetForm = () => {
  const [category, setCategory] = useState('my pet');
  const [photo, setPhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = direction => {
    if (direction === 'next') {
      setCurrentStep(prev => prev + 1);
    }
    if (direction === 'back') {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (values, { setFieldError }) => {
    if (!photo) {
      await setFieldError('photo', 'Load image');
      return;
    }

    let formData = new FormData();
    formData.append('photo', photo);
    for (let value in values) {
      if (!values[value]) {
        continue;
      }
      const fields = ['title', 'location', 'sex'];
      if (fields.includes(value) && category === 'my pet') {
        continue;
      }

      if (value === 'price' && category !== 'sell') {
        continue;
      }
      formData.append(value, values[value]);
    }

    for (let property of formData.entries()) {
      console.log(property[0], property[1]);
    }
  };

  return (
    <>
      <Title category={category} currentStep={currentStep} />
      <Stepper currentStep={currentStep} />
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={handleSubmit}
      >
        {helpers => (
          <StyledForm autoComplete="off">
            {currentStep === 0 && (
              <ChooseOptionForm
                helpers={helpers}
                setCategory={setCategory}
                changeStep={changeStep}
              />
            )}
            {currentStep === 1 && (
              <PersonalDetailsForm
                helpers={helpers}
                changeStep={changeStep}
                category={category}
              />
            )}
            {currentStep === 2 && (
              <MoreInfoForm
                category={category}
                setPhoto={setPhoto}
                changeStep={changeStep}
                helpers={helpers}
                photo={photo}
              />
            )}
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default AddPetForm;
