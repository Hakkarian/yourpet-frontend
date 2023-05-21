// import React, {useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";

import {List} from './PetsList.styled';
// import { Item } from "components/PetsItem/PetsItem.styled";
// import { selectAllPets } from "redux/pets/pets-selector";
// import { getAllPets } from "redux/pets/pets-operations";
import PetsItem from "components/PetsItem";

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
    // const dispatch = useDispatch();
    // const pets = useSelector(selectAllPets);

    // useEffect(() => {
    //    dispatch(getAllPets());
    // }, [dispatch]);
 
    return (
        <List>
        {pets.map(pet => < PetsItem key={pet._id} pet={pet} />)
        // ) : (
        //  <Item>No pets yet 😔</Item> 
        }
    </List> 
    )
};

export default PetsList;
