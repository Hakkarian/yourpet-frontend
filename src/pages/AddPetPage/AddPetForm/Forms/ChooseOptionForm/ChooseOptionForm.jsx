import { useNavigate } from 'react-router-dom';

import Button from '../../FormFields/Button/Button';

import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import formFields from '../../FormModel/formFields';

import { ToolBar } from './ChooseOptionForm.styled';
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
    <div>
      <ToolBar>
        <RadioButtonField
          value="my pet"
          label="Your pet"
          padding={16}
          {...formFields.category}
        />
        <RadioButtonField
          value="sell"
          label="Sell"
          padding={16}
          {...formFields.category}
        />
        <RadioButtonField
          value="lost-found"
          label="Lost / found"
          padding={16}
          {...formFields.category}
        />
        <RadioButtonField
          value="for-free"
          label="In good hands"
          padding={16}
          {...formFields.category}
        />
      </ToolBar>
      <BtnWrapper>
        <Button type="button" onClick={handleClick} width="248px">
          Next
          <PawIcon />
        </Button>
        <Button
          type="button"
          transparent
          onClick={() => navigate(location)}
          width={134}
        >
          <ArrowIcon />
          Cancel
        </Button>
      </BtnWrapper>
    </div>
  );
};

export default ChooseOptionForm;
