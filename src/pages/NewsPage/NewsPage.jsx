import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

import { fetchNews } from 'redux/news/news-operations';
import {
  selectNews,
  selectIsLoading,
  selectError,
} from 'redux/news/news-selector';

import { Loader } from 'components/Loader';

import { Container } from 'shared/components/Container/Container.styled';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import ReusableTitle from 'shared/components/ReusableTitle';

import { NewsList } from 'components/News/NewsList/NewsList';
import { useSearchParams } from 'react-router-dom';
import { selectTotalPage } from 'redux/news/news-selector';
import { Box, Pagination, Stack } from '@mui/material';
import MediaQuery from 'react-responsive';

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page] = useState(1);

  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') ?? '';
  const pageQty = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);

  const handleNewsSearchSubmit = value => {
    setSearchQuery(value);
  };

  return (
    <>

      <Container>
        <ReusableTitle>News</ReusableTitle>
        <SearchNewsForm onSubmit={handleNewsSearchSubmit} />
        {isLoading && !error && <Loader size={30} marginTop={0} />}
        {newsItems.length !== 0 && <NewsList news={newsItems} />}
        {!isLoading && newsItems.length === 0 && (
          <p> Such news wasn't found </p>
        )}
      </Container>
    </>
  );
};

export default NewsPage;
