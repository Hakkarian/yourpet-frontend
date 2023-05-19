import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import { selectIsNoticeAdded } from 'redux/notices/notices-selector';
import { selectIsPetAdded } from 'redux/pets/pets-selector';

import { addPets } from 'redux/pets/pets-operations';
import { createNotice } from 'redux/notices/notices-operations';

import { Formik, Form } from 'formik';
import Title from 'pages/AddPetPage/AddPetForm/FormFields/Title/Title';
import { ContainerCss } from './AddPetForm.styled';

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

  const dispatch = useDispatch();

  const location = useLocation();
  const prevLocation = location?.state?.from || '/';

  const isNoticeAdded = useSelector(selectIsNoticeAdded);
  const isPetAdded = useSelector(selectIsPetAdded);

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
      await setFieldError('photo', 'Please load image');
      return;
    }

    //form request body
    let formData = new FormData();
    formData.append('photo', photo);
    for (let value in values) {
      if (!values[value]) {
        continue;
      }
      if (value === 'category' && category === 'my pet') {
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

    // for (let property of formData.entries()) {
    //   console.log(property[0], property[1]);
    // }

    //setd data on backend
    if (category === 'my pet') {
      dispatch(addPets(formData));
    } else {
      dispatch(createNotice(formData));
    }
  };

  if (isNoticeAdded) {
    return <Navigate to={`/notices/${category}`} />;
  }
  if (isPetAdded) {
    return <Navigate to="/user" />;
  }

  return (
    <ContainerCss category={category} currentStep={currentStep}>
      <Title category={category} currentStep={currentStep} />
      <Stepper category={category} currentStep={currentStep} />
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={handleSubmit}
      >
        {helpers => (
          <Form autoComplete="off">
            {currentStep === 0 && (
              <ChooseOptionForm
                helpers={helpers}
                setCategory={setCategory}
                changeStep={changeStep}
                location={prevLocation}
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
          </Form>
        )}
      </Formik>
    </ContainerCss>
  );
};

export default AddPetForm;
