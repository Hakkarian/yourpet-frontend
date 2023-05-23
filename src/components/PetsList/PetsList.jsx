import React from 'react';
import { NoPetMessage } from './PetsList.styled';

import { List } from './PetsList.styled';
import PetsItem from 'components/PetsItem';

const PetsList = ({ pets, updatePage }) => {
  return (
    <List>
      {pets.length > 0 ? (
        pets.map(pet => (
          <PetsItem
            key={pet._id}
            pet={pet}
            id={pet._id}
            updatePage={updatePage}
          />
        ))
      ) : (
        <NoPetMessage>No pets yet 😔</NoPetMessage>
      )}
    </List>
  );
};

export default PetsList;
