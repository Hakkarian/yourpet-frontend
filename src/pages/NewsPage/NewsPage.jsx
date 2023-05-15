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
import { ReusableTitle } from 'shared/components/ReusableTitle/ReusableTitle';
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
      {isLoading && operation === 'fetch' && !error && <Loader />}
      <ReusableTitle>News</ReusableTitle>
      <NewsList news={newsItems} />
    </>
  );
};

export default NewsPage;
