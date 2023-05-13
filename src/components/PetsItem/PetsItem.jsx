import React from "react";

import {ReactComponent as DeleteIcon} from '../../icons/trash.svg';
import {Item, DeleteBtn, Span, BtnWrap} from './PetsItem.styled';

const PetsItem = ({pet}) => {

    return (
        <>
         <Item> 
           {/*<img src={require(pet.avatarURL)} alt="pet's avatar" width="240" height="240" /> */}
            <BtnWrap>
            <p>Name: <Span>{pet.name}</Span></p>
            <DeleteBtn type="button">
                <DeleteIcon stroke="#54ADFF" width="24px" height="24px" />
            </DeleteBtn>
            </BtnWrap>
            <p>Date of birth: <Span>{pet.birthday}</Span></p>
            <p>Breed: <Span>{pet.breed}</Span></p>
            <p>Comments: <Span>{pet.comments}</Span></p>
         </Item>
        </>
    )
};

export default PetsItem;