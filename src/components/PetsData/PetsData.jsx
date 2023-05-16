import React from "react";
import { Link } from "react-router-dom";

import PetsList from "components/PetsList";
import { Title } from "pages/UserPage/UserPage.styled";

import {PetsWrap, BtnWrap, } from './PetsData.styled';
// import BlueButton from "shared/components/BlueButton/BlueButton";

const PetsData = () => {

    // const handleAddPet = () => {
    //     console.log("Add pet!!! Cool!!")
    // };

    return (
        <PetsWrap>
            <BtnWrap>
            <Title>My pets:</Title>
                <Link to="/add-pet">
                    {/* <BlueButton type="button" onAuxClick={handleAddPet}>Add Pet
            <PlusIcon />
                    </BlueButton> */}
                </Link>
            </BtnWrap>
            <PetsList />
        </PetsWrap>
    )
};

export default PetsData;