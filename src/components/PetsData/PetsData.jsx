import React from "react";
import { Link, useLocation } from "react-router-dom";

import PetsList from "components/PetsList";
import {PetsWrap, BtnWrap, PlusIcon,Title, Button } from './PetsData.styled';

const PetsData = () => {
    const location = useLocation();

    return (
        <PetsWrap>
            <BtnWrap>
            <Title>My pets:</Title>
                <Link to="/add-pet" state={{from: location}}>
                    <Button type="button">Add Pet
                 <PlusIcon />
                    </Button>
                </Link>
            </BtnWrap>
            <PetsList />
        </PetsWrap>
    )
};

export default PetsData;