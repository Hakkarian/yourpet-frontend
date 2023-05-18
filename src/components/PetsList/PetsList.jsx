import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

import {List} from './PetsList.styled';
import PetsItem from "components/PetsItem";
//import { getAllPets } from "redux/pets/pets-operations";

const pets = [
    { "_id": "1",
      "petOwnerId": "1",
      "category": "my pet",
      "photo": "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
      "name": "Jack",
      "birthday": "22.04.2018",
      "breed": "Persian cat",
      "comments": "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat." 
    },
    {
        "_id": "2",
        "petOwnerId": "2",
        "category": "my pet",
        "photo": "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
        "name": "Jack",
        "birthday": "22.04.2018",
        "breed": "Persian cat",
        "comments": "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat."
    }
  ];

const PetsList = () => {
    //
    // const [pets, setPets] = useState([]);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //  setPets(dispatch(getAllPets()));
    // }, [dispatch]);
 
    return (
        <List>
        {pets.map(pet => (
            < PetsItem key={pet._id} pet={pet} />
        ))}
    </List> 
    )
};

export default PetsList;
