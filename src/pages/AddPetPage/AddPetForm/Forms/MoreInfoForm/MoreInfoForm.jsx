import { FormError } from '../../AddPetForm';
// import { useEffect } from 'react';

import TextField from '../../FormFields/TextField/TextField';
import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import FileInput from '../../FormFields/FileInput/FileInput';
import { StyledButton } from '../../FormFields/Button/Button.styled';

import formFields from '../../FormModel/formFields';

import { Subtitle, Wrap } from './MoreInfoForm.styled';

const MoreInfoForm = ({
  setPhoto,
  photo,
  category,
  changeStep,
  helpers: { errors, touched },
}) => {
  // console.log(helpers);

  // useEffect(() => {
  //   if (photo) {
  //     const input = document.getElementById('photo');

  //     // console.log(input);
  //     // input.value = photo;
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // }, [photo]);
  return (
    <div>
      <div>
        <Subtitle>The sex</Subtitle>
        <Wrap gap={12}>
          <RadioButtonField value="female" label="Female" {...formFields.sex} />
          <RadioButtonField value="male" label="Male" {...formFields.sex} />
        </Wrap>
        <FormError name="sex" />
      </div>

      <Wrap gap={28}>
        <Subtitle>Add photo</Subtitle>
        <FileInput
          photo={photo}
          {...formFields.photo}
          onChange={e => setPhoto(e.currentTarget.files[0])}
        />
      </Wrap>
      <TextField errors={errors} touched={touched} {...formFields.location} />
      {category === 'sell' && (
        <TextField errors={errors} touched={touched} {...formFields.price} />
      )}
      <TextField errors={errors} touched={touched} {...formFields.comments} />
      <StyledButton type="submit" width={248}>
        Done
      </StyledButton>
      <StyledButton
        transparent={true}
        type="button"
        width={248}
        onClick={() => changeStep('back')}
      >
        Back
      </StyledButton>
    </div>
  );
};

export default MoreInfoForm;
