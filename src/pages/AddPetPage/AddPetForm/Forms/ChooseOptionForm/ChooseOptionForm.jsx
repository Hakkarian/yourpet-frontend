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
        {/* <label>
              <Field
                type="radio"
                name="category"
                value="yourPet"
                checked={category === 'yourPet' ? true : false}
              />
              Your pet
            </label>
            <br /> */}

        <RadioButtonField value="sell" label="Sell" {...formFields.category} />
        <RadioButtonField
          value="lostFound"
          label="Lost / found"
          {...formFields.category}
        />
        <RadioButtonField
          value="inGoodHands"
          label="In good handsll"
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
