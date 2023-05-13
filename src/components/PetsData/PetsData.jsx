import React from "react";

import PetsList from "components/PetsList";
import { Title } from "pages/UserPage/UserPage.styled";

const PetsData = () => {

    return (
        <div>
            <Title>My pets:</Title>
            <PetsList />
        </div>
    )
};

export default PetsData;