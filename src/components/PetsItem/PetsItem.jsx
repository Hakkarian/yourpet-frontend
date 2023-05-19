import React, {useState} from "react";

import {Item, DeleteBtn, Span, BtnWrap, Icon, PetImg, InfoTitle, InfoWrap} from './PetsItem.styled';
import ModalDelete from "components/ModalDelete";

const PetsItem = ({pet }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDeleteBtn = () => {
       setIsModalOpen(true);
    };

    return (
        <>
         <Item> 
           <PetImg src={pet.photo} alt="pet's avatar" width="240" height="240" />
           <InfoWrap>
            <BtnWrap>
            <InfoTitle>Name: <Span>{pet.name}</Span></InfoTitle>
            <DeleteBtn type="button" onClick={onDeleteBtn}>
                <Icon />
            </DeleteBtn>
            {isModalOpen && <ModalDelete/> }
            </BtnWrap>
            <InfoTitle>Date of birth: <Span>{pet.birthday}</Span></InfoTitle>
            <InfoTitle>Breed: <Span>{pet.breed}</Span></InfoTitle>
            <InfoTitle>Comments: <Span>{pet.comments}</Span></InfoTitle>
            </InfoWrap>
         </Item>
        </>
    )
};

export default PetsItem;