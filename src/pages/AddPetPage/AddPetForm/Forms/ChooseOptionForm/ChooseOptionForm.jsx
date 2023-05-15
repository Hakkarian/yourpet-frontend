import Button from '../../FormFields/Button/Button';

import RadioButtonField from '../../FormFields/RadioButtonField/RadioButtonField';
import formFields from '../../FormModel/formFields';

import { ToolBar, FormWrap } from './ChooseOptionForm.styled';

const ChooseOptionForm = ({ helpers, setCategory, changeStep }) => {
  const { values, setErrors } = helpers;
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
      <div>
        <Button type="button" onClick={handleClick} width={248}>
          Next
        </Button>
      </div>
    </FormWrap>
  );
};

export default ChooseOptionForm;
