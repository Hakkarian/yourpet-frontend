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
import Modal from 'shared/components/Modal/Modal';
import ModalDelitePets from 'components/Modals/ModalDelitePets';
import { useToggle } from 'shared/hooks/useToggle';


const PetsItem = ({ pet, id, updatePage }) => {
  const [, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isOpen, open, close } = useToggle();

  const handleDelete = async () => {
    dispatch(deletePets(id)).then(() => {
      setIsModalOpen(false);
      dispatch(getAllPets());
      updatePage(1);
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
          <BtnWrap>
            <DeleteBtn type="button" onClick={open}>
              <Icon />
            </DeleteBtn>
            {isOpen && (
              <Modal onClose={close}>
                <ModalDelitePets
                  onClick={handleDelete}
                  onClose={close}
                ></ModalDelitePets>
              </Modal>
            )}
          </BtnWrap>
        </ContentWrap>
      </Item>
    </>
  );
};

export default PetsItem;
