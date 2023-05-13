import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchPetByQuery } from '../../../shared/services/notices-api';
import { toast } from 'react-toastify';

import SearchPetsPage from '../../../pages/SearchPetsPage/SearchPetsPage';
import search from '../../../icons/search.svg';
import deleteQuery from '../../../icons/cross-small.svg';
import { TitleSearch, FormSearch, InputSearch, ButtonIcon } from './NoticesSearch.styled';
import NoticesCategoriesNav from '../NoticesCategoriesNav';

const NoticesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pets, setPets] = useState([]);
  const searchPet = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(searchPet);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery === '') {
      return toast.error('Please enter pet!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
    setSearchParams({ query: searchQuery });
  };

   const handlerReset = e => {
     e.preventDefault();
     setPets('');
     setSearchQuery('');
     setSearchParams({ query: '' });
   };


  useEffect(() => {
    if (!searchPet) {
      return;
    }

    searchPetByQuery(searchPet).then(setPets);
  }, [searchPet, setPets]);

  return (
    <div>
      <FormSearch onSubmit={handleSubmit}>
        <TitleSearch>Find your favorite pet</TitleSearch>
        <InputSearch
          placeholder="Search"
          onChange={event => setSearchQuery(event.target.value)}
          value={searchQuery}
          onReset={handlerReset}
          searchQuery={searchQuery.trim()}
        />
        {!searchQuery && (
          <ButtonIcon type="submit">
            <img src={search} alt="search" width="24" height="24" />
          </ButtonIcon>
        )}
        {searchQuery && (
          <ButtonIcon type="reset">
            <img src={deleteQuery} alt="delete" width="24" height="24" />
          </ButtonIcon>
        )}
      </FormSearch>
      <NoticesCategoriesNav />

      <main>
        <SearchPetsPage notices={pets} />
      </main>
    </div>
  );
};

export default NoticesSearch;
