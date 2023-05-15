import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllNews } from 'redux/news/news-operations';
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectOperation,
} from 'redux/news/news-selector';

import { Loader } from 'components/Loader';

import { Container } from 'shared/components/Container/Container.styled';
import { SearchForm } from 'shared/components/SearchForm/SearchForm';
import ReusableTitle from 'shared/components/ReusableTitle';

import { NewsList } from 'components/NewsList/NewsList';

// import newsItems from '../../components/NewsList/news.json';

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const operation = useSelector(selectOperation);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  return (
    <>
      {/* <Container> */}
      <ReusableTitle>News</ReusableTitle>
      <SearchForm />
      {isLoading && operation === 'fetch' && !error && <Loader />}
      {newsItems.length !== 0 && <NewsList news={newsItems} />}
      {/* </Container> */}
    </>
  );
};

export default NewsPage;
