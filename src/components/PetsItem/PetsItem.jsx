import React, {useState} from "react";


import {Item, DeleteBtn, Span, BtnWrap, Icon, Image, TextWrap, Text  } from './PetsItem.styled';

// import ModalDelete from "../Modals/ModalDelete/index";



const PetsItem = ({pet }) => {
    const [setIsModalOpen] = useState(false);

    const onDeleteBtn = () => {
       setIsModalOpen(true);
    };

    return (
        <>
         <Item> 
           <Image src={pet.photo} alt="pet's avatar" width="240" height="240" />
           <div>
            <BtnWrap>
            <TextWrap><Text>Name: <Span>{pet.name}</Span></Text></TextWrap>
            <DeleteBtn type="button" onClick={onDeleteBtn}>
                <Icon />
            </DeleteBtn>
            {/* {isModalOpen && <ModalDelete onClick={onDeleteBtn}/> } */}
            </BtnWrap>
            <TextWrap><Text>Date of birth: <Span>{pet.birthday}</Span></Text></TextWrap>
            <TextWrap><Text>Breed: <Span>{pet.breed}</Span></Text></TextWrap>
            <TextWrap><Text>Comments: <Span>{pet.comments}</Span></Text></TextWrap>
            </div>
         </Item>
        </>
    )
};

export default PetsItem;