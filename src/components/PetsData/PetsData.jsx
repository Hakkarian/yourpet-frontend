import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import PetsList from 'components/PetsList';
import {
  PetsWrap,
  BtnWrap,
  PlusIcon,
  Title,
  Button,
  PaginationButton,
  Box,
} from './PetsData.styled';
import { getAllPets } from 'redux/pets/pets-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader';
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

  const onButtonMoreClick = () => {
    setPage(prev => prev + 1);
  };

  const onButtonPrevClick = () => {
    setPage(prev => prev - 1);
  };

  return (
    <PetsWrap>
      <BtnWrap>
        <Title>My pets:</Title>
        {isLoading ? (
       <Loader />
      ) : (
        page > 1 && (
          <PaginationButton type="button" onClick={onButtonPrevClick}>
            Prev pets
          </PaginationButton>
        )
      )}
        <Link to="/add-pet" state={{ from: location }}>
          <Button type="button">
            Add Pet
            <PlusIcon />
          </Button>
        </Link>
      </BtnWrap>

      {/* {isLoading ? (
       <Loader />
      ) : (
        page > 1 && (
          <PaginationButton type="button" onClick={onButtonPrevClick}>
            Prev pets
          </PaginationButton>
        )
      )} */}

      <PetsList pets={pets} updatePage={setPage} />

      {isLoading ? (
        <Box></Box>
      ) : (
        page < totalPage &&
        totalPage > 1 && (
          <PaginationButton type="button" onClick={onButtonMoreClick}>
            Next pets
          </PaginationButton>
        )
      )}
    </PetsWrap>
  );
};

export default PetsData;
