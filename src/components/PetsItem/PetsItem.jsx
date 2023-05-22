import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePets, getAllPets } from 'redux/pets/pets-operations';

import {
  Item,
  DeleteBtn,
  Span,
  BtnWrap,
  Icon,
  Image,
  TextWrap,
  Text,
  ContentWrap,
} from './PetsItem.styled';

// import ModalDelete from '../Modals/ModalDelete/index';

const PetsItem = ({ pet, id }) => {
  const [, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  //   const onDeleteBtn = () => {
  //     setIsModalOpen(true);
  //   };

  const handleDelete = async () => {
    dispatch(deletePets(id)).then(() => {
      setIsModalOpen(false);
      dispatch(getAllPets());
    });
  };

  return (
    <>
      <Item>
        <Image src={pet.photo} alt="pet's avatar" width="240" height="240" />
        <ContentWrap>
          <TextWrap>
            <Text>
              Name: <Span>{pet.name}</Span>
            </Text>
          </TextWrap>
          <TextWrap>
            <Text>
              Date of birth: <Span>{pet.birthday}</Span>
            </Text>
          </TextWrap>
          <TextWrap>
            <Text>
              Breed: <Span>{pet.breed}</Span>
            </Text>
          </TextWrap>
          <TextWrap>
            <Text>
              Comments: <Span>{pet.comments}</Span>
            </Text>
          </TextWrap>
          {/* <BtnWrap>
            <DeleteBtn type="button" onClick={() => setIsModalOpen(true)}>
              <Icon />
            </DeleteBtn>
            {isModalOpen && (
              <ModalDelete
                onClick={handleDelete}
                onClose={() => setIsModalOpen(false)}
              />
            )}
          </BtnWrap> */}
          <BtnWrap>
            <DeleteBtn type="button" onClick={handleDelete}>
              <Icon />
            </DeleteBtn>
          </BtnWrap>
        </ContentWrap>
      </Item>
    </>
  );
};

export default PetsItem;
