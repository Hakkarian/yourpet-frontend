import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import PetsList from 'components/PetsList';
import {
  PetsWrap,
  BtnWrap,
  PlusIcon,
  Title,
  Button,
  ButtonMore,
  ButtonPrev,
  Box,
} from './PetsData.styled';
import { getAllPets } from 'redux/pets/pets-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPets,
  selectIsLoading,
  selectTotalPage,
} from 'redux/pets/pets-selector';

const PetsData = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const pets = useSelector(selectAllPets);
  const totalPage = useSelector(selectTotalPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllPets({ page }));
  }, [dispatch, page]);

  const buttonMoreClick = () => {
    setPage(prev => prev + 1);
  };

  const buttonPrevClick = () => {
    setPage(prev => prev - 1);
  };

  return (
    <PetsWrap>
      <BtnWrap>
        <Title>My pets:</Title>
        <Link to="/add-pet" state={{ from: location }}>
          <Button type="button">
            Add Pet
            <PlusIcon />
          </Button>
        </Link>
      </BtnWrap>

      {isLoading ? (
        <Box></Box>
      ) : (
        page > 1 && (
          <ButtonPrev type="button" onClick={buttonPrevClick}>
            Prev pets
          </ButtonPrev>
        )
      )}

      <PetsList pets={pets} updatePage={setPage} />

      {isLoading ? (
        <Box></Box>
      ) : (
        page < totalPage &&
        totalPage > 1 && (
          <ButtonMore type="button" onClick={buttonMoreClick}>
            Next pets
          </ButtonMore>
        )
      )}
    </PetsWrap>
  );
};

export default PetsData;
