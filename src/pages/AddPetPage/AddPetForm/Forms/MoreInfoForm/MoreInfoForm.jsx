import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';

import formFields from '../../FormModel/formFields';

import TextField from '../../FormFields/TextField/TextField';
import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import FormError from '../../FormFields/FormError/FormError';
import FileInput from '../../FormFields/FileInput/FileInput';
import { Loader } from 'components/Loader';

import {
  selectIsPetOrNoticeLoading,
  selectIsPetOrNoticeError,
} from 'redux/pets/pets-selector';

import { ReactComponent as FemaleIcon } from 'icons/female.svg';
import { ReactComponent as MaleIcon } from 'icons/male.svg';

import { toast } from 'react-hot-toast';

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
  const isLoading = useSelector(selectIsPetOrNoticeLoading);
  const error = useSelector(selectIsPetOrNoticeError);

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
              <MediaQuery maxWidth={767.9}> Add photo</MediaQuery>
              <MediaQuery minWidth={768}>
                {category === 'my pet' ? 'Add photo' : 'Load the pet’s image:'}
              </MediaQuery>
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
      {!isLoading && (
        <BtnWrapper>
          <Button type="submit" width="248px">
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
      )}
      {isLoading && <Loader />}
      {error &&
        toast(error, {
          icon: '🤯',
          style: {
            borderRadius: '10px',
            background: 'darkred',
            color: '#fff',
          },
        })}
    </>
  );
};

export default MoreInfoForm;
