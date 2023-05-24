import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchNews } from 'redux/news/news-operations';
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectTotalPage,
} from 'redux/news/news-selector';

import { Loader } from 'components/Loader';
import { Container } from 'shared/components/Container/Container.styled';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import ReusableTitle from 'shared/components/ReusableTitle';
import { NewsList } from 'components/News/NewsList/NewsList';
import { PaginateComponent } from 'shared/components/Pagination/Pagination';
import { NotFound } from 'shared/components/NotFound/NotFound';

const initialState = { search: '', page: 1 };

const NewsPage = () => {
  const [state, setState] = useState({ ...initialState });
  const { search, page } = state;

  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageQty = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchNews({ page: page, search: search }));
  }, [dispatch, page, search]);

  const handleNewsSearchSubmit = value => {
    setState(prevState => {
      if (prevState.search !== value) {
        setState({ search: value, page: 1 });
      }

      return setState({ search: value });
    });
  };

  const showWarning = () => {
    dispatch(fetchNews());
    setState({ search: '' });
  };
  return (
    <Container>
      <ReusableTitle>News</ReusableTitle>
      <SearchNewsForm onSubmit={handleNewsSearchSubmit} onClick={showWarning} />
      {isLoading && !error && <Loader />}
      {error && <p>Somthing wrong</p>}
      {!isLoading && newsItems.length === 0 && <NotFound />}

      {!isLoading && newsItems.length !== 0 && (
        <>
          <NewsList news={newsItems} />
          <PaginateComponent
            count={pageQty}
            page={page}
            onChange={(_, num) => {
              setState({ search: search, page: num });
            }}
          />
        </>
      )}
    </Container>
  );
};

export default NewsPage;
