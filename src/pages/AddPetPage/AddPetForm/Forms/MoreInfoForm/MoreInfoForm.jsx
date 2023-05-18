import formFields from '../../FormModel/formFields';

import TextField from '../../FormFields/TextField/TextField';
import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import FormError from '../../FormFields/FormError/FormError';
import FileInput from '../../FormFields/FileInput/FileInput';

import { ReactComponent as FemaleIcon } from 'icons/female.svg';
import { ReactComponent as MaleIcon } from 'icons/male.svg';

import Button from '../../FormFields/Button/Button';
import {
  Subtitle,
  Wrap,
  DivCss,
  Container,
  FlexDiv,
  Wrapper,
} from './MoreInfoForm.styled';
import { PawIcon, ArrowIcon, BtnWrapper } from '../../AddPetForm.styled';

const MoreInfoForm = ({
  setPhoto,
  photo,
  category,
  changeStep,
  helpers: { errors, touched },
}) => {
  return (
    <>
      <Container category={category}>
        <div>
          {category !== 'my pet' && (
            <DivCss>
              <Subtitle>The sex</Subtitle>
              <Wrap gap={23}>
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

          <FlexDiv category={category}>
            <Subtitle>
              {/* {category === 'my pet' ? 'Add photo' : 'Load the pet’s image:'} */}
              Add photo
            </Subtitle>
            <FileInput
              photo={photo}
              {...formFields.photo}
              onChange={e => setPhoto(e.currentTarget.files[0])}
            />
          </FlexDiv>
        </div>
        <Wrapper>
          {category !== 'my pet' && (
            <TextField
              errors={errors}
              touched={touched}
              {...formFields.location}
            />
          )}

          {category === 'sell' && (
            <TextField
              errors={errors}
              touched={touched}
              {...formFields.price}
            />
          )}
          <TextField
            errors={errors}
            touched={touched}
            category={category}
            {...formFields.comments}
          />
        </Wrapper>
      </Container>
      <BtnWrapper>
        <Button type="submit" width={248}>
          Done
          <PawIcon />
        </Button>
        <Button
          transparent={true}
          type="button"
          width={134}
          onClick={() => changeStep('back')}
        >
          <ArrowIcon />
          Back
        </Button>
      </BtnWrapper>
    </>
  );
};

export default MoreInfoForm;
