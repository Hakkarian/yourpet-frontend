import AddPetForm from './AddPetForm/AddPetForm';

import { Section } from './AddPetPage.styled';
import { Container } from 'shared/components/Container/Container.styled';

const AddPetPage = () => {
  return (
    <Container>
      <AddPetForm />
    </Container>
  );
};

export default AddPetPage;
