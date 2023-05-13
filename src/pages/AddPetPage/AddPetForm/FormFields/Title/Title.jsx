import { StyledTitle } from './Title.styled';

const Title = ({ category, currentStep }) => {
  let title = '';
  switch (category) {
    case 'sell':
      title = 'Add pet for sell';
      break;
    case 'lostFound':
      title = 'Add lost pet';
      break;
    case 'inGoodHands':
      title = 'Add pet in good hands';
      break;
    default:
      title = 'Add pet';
  }
  if (currentStep === 0) {
    title = 'Add pet';
  }
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
