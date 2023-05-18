import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { addPets } from 'redux/pets/pets-operations';
import { addNotices } from 'redux/notices/notices-operations';

import { Formik, Form } from 'formik';
import Title from 'pages/AddPetPage/AddPetForm/FormFields/Title/Title';
import { ContainerCss } from './AddPetForm.styled';

import initialValues from './FormModel/formInitualValues';
import validationSchema from './FormModel/validationSchema';

import Stepper from './Stepper/Stepper';
import ChooseOptionForm from './Forms/ChooseOptionForm/ChooseOptionForm';
import PersonalDetailsForm from './Forms/PersonalDetailsForm/PersonalDetailsForm';
import MoreInfoForm from './Forms/MoreInfoForm/MoreInfoForm';

// import {
//   selectShouldNoticeRedirect,
// } from 'redux/notices/notices-selector';

const AddPetForm = () => {
  const [category, setCategory] = useState('my pet');
  const [photo, setPhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const location = useLocation();
  const prevLocation = location?.state?.from || '/';

  // const shouldRedirect = useSelector(selectAddedNotice);

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
      dispatch(addNotices(formData));
      // console.log('shoul not redirect', shouldRedirect);
    }
  };

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

// import { useLocation } from 'react-router-dom';
// const location = useLocation();

// <Link to="/add-pet" state={{ from: location }}>
//   Add Pet
// </Link>;
