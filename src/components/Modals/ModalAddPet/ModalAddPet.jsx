import {
  ContainerButton,
  ModalTitle,
  Container,
  ButtonRegister,
  PawIcon,
} from './ModalAddPet.styled';

const ModalAddPet = () => {
  return (
    <Container>
      <ModalTitle>
        To add a pet,<br></br>you need to register
      </ModalTitle>
      <ContainerButton>
        <ButtonRegister to={'/register'}>
          Register <PawIcon />
        </ButtonRegister>
      </ContainerButton>
    </Container>
  );
};

export default ModalAddPet;
