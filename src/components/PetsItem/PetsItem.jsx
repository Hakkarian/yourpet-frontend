import React, {useState} from "react";

import {Item, DeleteBtn, Span, BtnWrap, Icon} from './PetsItem.styled';
import ModalDelete from "components/ModalDelete";

const PetsItem = ({pet }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDeleteBtn = () => {
       setIsModalOpen(true);
    };

    return (
        <>
         <Item> 
           <img src={pet.avatarURL} alt="pet's avatar" width="240" height="240" />
            <BtnWrap>
            <p>Name: <Span>{pet.name}</Span></p>
            <DeleteBtn type="button" onClick={onDeleteBtn}>
                <Icon />
            </DeleteBtn>
            {isModalOpen && <ModalDelete/> }
            </BtnWrap>
            <p>Date of birth: <Span>{pet.birthday}</Span></p>
            <p>Breed: <Span>{pet.breed}</Span></p>
            <p>Comments: <Span>{pet.comments}</Span></p>
         </Item>
        </>
    )
};

export default PetsItem;