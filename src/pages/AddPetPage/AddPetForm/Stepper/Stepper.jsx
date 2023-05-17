import { List, Item } from './Stepper.styled';
const fields = ['Choose  option', 'Personal details', 'More info'];

const Stepper = ({ currentStep, category }) => {
  return (
    <List currentStep={currentStep} category={category}>
      {fields.map((field, idx) => (
        <Item key={idx} idx={idx} currentStep={currentStep}>
          {field}
        </Item>
      ))}
    </List>
  );
};

export default Stepper;
