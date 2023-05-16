import formFields from '../../FormModel/formFields';

import TextField from '../../FormFields/TextField/TextField';
import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import FormError from '../../FormFields/FormError/FormError';
import FileInput from '../../FormFields/FileInput/FileInput';

import { StyledButton } from '../../FormFields/Button/Button.styled';
import { Subtitle, Wrap } from './MoreInfoForm.styled';

const MoreInfoForm = ({
  setPhoto,
  photo,
  category,
  changeStep,
  helpers: { errors, touched },
}) => {
  return (
    <div>
      {category !== 'my pet' && (
        <div>
          <Subtitle>The sex</Subtitle>
          <Wrap gap={12}>
            <RadioButtonField
              value="female"
              label="Female"
              {...formFields.sex}
            />
            <RadioButtonField value="male" label="Male" {...formFields.sex} />
          </Wrap>
          <FormError name="sex" />
        </div>
      )}

      <Wrap gap={28}>
        <Subtitle>Add photo</Subtitle>
        <FileInput
          photo={photo}
          {...formFields.photo}
          onChange={e => setPhoto(e.currentTarget.files[0])}
        />
      </Wrap>
      {category !== 'my pet' && (
        <TextField errors={errors} touched={touched} {...formFields.location} />
      )}

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
