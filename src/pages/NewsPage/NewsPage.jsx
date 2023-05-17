import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

import { fetchNews } from 'redux/news/news-operations';
import {
  selectNews,
  selectIsLoading,
  selectError,
} from 'redux/news/news-selector';

import { Loader } from 'components/Loader';

// import { Container } from 'shared/components/Container/Container.styled';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import ReusableTitle from 'shared/components/ReusableTitle';

import { NewsList } from 'components/News/NewsList/NewsList';

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page] = useState(1); 
  
  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNews({ page, search: searchQuery }));
  }, [dispatch, page, searchQuery]);

  const handleNewsSearchSubmit = value => {
    console.log('отримуємо дані з форми у NewsPage--->', value);

    setSearchQuery(value);
  };

  console.log('searchQuery(value)--->', searchQuery);
  return (
    <>
      <ReusableTitle>News</ReusableTitle>
      <SearchNewsForm onSubmit={handleNewsSearchSubmit} />
      {isLoading && !error && <Loader />}
      {newsItems.length !== 0 && <NewsList news={newsItems} />}
    </>
  );
};

export default NewsPage;
