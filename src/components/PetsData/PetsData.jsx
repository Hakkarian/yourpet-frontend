import React from "react";
import { Link, useLocation } from "react-router-dom";

import PetsList from "components/PetsList";
import { Title } from "pages/UserPage/UserPage.styled";
import {PetsWrap, BtnWrap, PlusIcon } from './PetsData.styled';
import Button from 'shared/components/Button/Button';

const PetsData = () => {
    const location = useLocation();

    return (
        <PetsWrap>
            <BtnWrap>
            <Title>My pets:</Title>
                <Link to="/add-pet" state={{from: location}}>
                    <Button type="button" color="blue" width="129px">  <PlusIcon  stroke="white"  width="10px" height="10px"/>Add Pet
                    </Button>
                </Link>
            </BtnWrap>
            <PetsList />
        </PetsWrap>
    )
};

export default PetsData;