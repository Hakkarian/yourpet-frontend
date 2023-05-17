import formFields from '../../FormModel/formFields';

import TextField from '../../FormFields/TextField/TextField';
import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import FormError from '../../FormFields/FormError/FormError';
import FileInput from '../../FormFields/FileInput/FileInput';

import { ReactComponent as FemaleIcon } from 'icons/female.svg';
import { ReactComponent as MaleIcon } from 'icons/male.svg';

import Button from '../../FormFields/Button/Button';
import { Subtitle, Wrap, DivCss } from './MoreInfoForm.styled';
import { PawIcon, ArrowIcon, BtnWrapper } from '../../AddPetForm.styled';

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
        <DivCss>
          <Subtitle>The sex</Subtitle>
          <Wrap gap={12}>
            <RadioButtonField
              value="female"
              label="Female"
              icon={FemaleIcon}
              fill="red"
              {...formFields.sex}
            />
            <RadioButtonField
              value="male"
              label="Male"
              icon={MaleIcon}
              fill="blue"
              {...formFields.sex}
            />
          </Wrap>
          <FormError name="sex" />
        </DivCss>
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
      <BtnWrapper>
        <Button type="submit" width={248}>
          Done
          <PawIcon />
        </Button>
        <Button
          transparent={true}
          type="button"
          width={248}
          onClick={() => changeStep('back')}
        >
          <ArrowIcon />
          Back
        </Button>
      </BtnWrapper>
    </div>
  );
};

export default MoreInfoForm;
