import { useNavigate } from 'react-router-dom';

import Button from '../../FormFields/Button/Button';
// import Button from 'shared/components/Button/Button';

import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import formFields from '../../FormModel/formFields';

import { ToolBar, FormWrap } from './ChooseOptionForm.styled';
import { PawIcon, ArrowIcon, BtnWrapper } from '../../AddPetForm.styled';

const ChooseOptionForm = ({ helpers, setCategory, changeStep, location }) => {
  const { values, setErrors } = helpers;
  const navigate = useNavigate();
  const handleClick = () => {
    setCategory(values.category);
    changeStep('next');
    setErrors({});
  };

  return (
    <FormWrap>
      <ToolBar>
        <RadioButtonField
          value="my pet"
          label="Your pet"
          {...formFields.category}
        />
        <RadioButtonField value="sell" label="Sell" {...formFields.category} />
        <RadioButtonField
          value="lost-found"
          label="Lost / found"
          {...formFields.category}
        />
        <RadioButtonField
          value="for-free"
          label="In good hands"
          {...formFields.category}
        />
      </ToolBar>
      <BtnWrapper>
        <Button type="button" onClick={handleClick} width={248}>
          Next
          <PawIcon />
        </Button>
        <Button
          type="button"
          transparent
          onClick={() => navigate(location)}
          width={248}
        >
          <ArrowIcon />
          Cancel
        </Button>
      </BtnWrapper>
    </FormWrap>
  );
};

export default ChooseOptionForm;
