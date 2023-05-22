import {
  ContainerButton,
  ModalTitle,
  Container,
  ButtonRegister,
  PawIcon,
} from './ModalAddPet.styled';
import angryDog from '../../../images/angry-dog.png';

const ModalAddPet = () => {
  return (
    <Container>
      <ModalTitle>
      You need to register<br></br> to add a pet
      </ModalTitle>
      <img src={angryDog} alt='not allowed' width='120' height='120'/>
      <ContainerButton>
        <ButtonRegister to={'/register'}>
          Register <PawIcon />
        </ButtonRegister>
      </ContainerButton>
    </Container>
  );
};

export default ModalAddPet;
