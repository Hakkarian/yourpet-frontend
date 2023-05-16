import React from "react";

import {Item, DeleteBtn, Span, BtnWrap, Icon} from './PetsItem.styled';
// import ModalApproveAction from "components/ModalApproveAction/ModalApproveAction";

const PetsItem = ({pet}) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const onDeleteBtn = () => {
    //    setIsModalOpen(true);
    };

    return (
        <>
         <Item> 
           {/*<img src={require(pet.avatarURL)} alt="pet's avatar" width="240" height="240" /> */}
            <BtnWrap>
            <p>Name: <Span>{pet.name}</Span></p>
            <DeleteBtn type="button" onClick={onDeleteBtn}>
                <Icon />
            </DeleteBtn>
            </BtnWrap>
            <p>Date of birth: <Span>{pet.birthday}</Span></p>
            <p>Breed: <Span>{pet.breed}</Span></p>
            <p>Comments: <Span>{pet.comments}</Span></p>
            {/* {isModalOpen && <ModalApproveAction />} */}
         </Item>
        </>
    )
};

export default PetsItem;