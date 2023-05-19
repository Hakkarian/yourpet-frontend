import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Pagination, Stack } from '@mui/material';
import MediaQuery from 'react-responsive';

import { fetchNews } from 'redux/news/news-operations';
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectTotalPage,
} from 'redux/news/news-selector';

import { Loader } from 'components/Loader';
// import { Container } from 'shared/components/Container/Container.styled';
import { SearchNewsForm } from 'components/News/SearchNewsForm/SearchNewsForm';
import ReusableTitle from 'shared/components/ReusableTitle';
import { NewsList } from 'components/News/NewsList/NewsList';

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
    <>
      <ReusableTitle>News</ReusableTitle>
      <SearchNewsForm onSubmit={handleNewsSearchSubmit} onClick={showWarning} />
      {isLoading && !error && <Loader />}
      {error && <p>Somthing wrong</p>}
      {!isLoading && newsItems.length === 0 && <p>OOOPS</p>}

      {!isLoading && newsItems.length !== 0 && (
        <>
          <NewsList news={newsItems} />
          <MediaQuery maxWidth={767}>
            <Box display="flex" justifyContent="center" pb="20px" pt="30px">
              <Stack spacing={2}>
                {!!pageQty && (
                  <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => {
                      setState({ search: search, page: num });
                    }}
                    showFirstButton={false}
                    showLastButton={false}
                    hidePrevButton={true}
                    hideNextButton={true}
                    color="primary"
                  />
                )}
              </Stack>
            </Box>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Box display="flex" justifyContent="center" pb="60px" pt="60px">
              <Stack spacing={2}>
                {!!pageQty && (
                  <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => {
                      setState({ search: search, page: num });
                    }}
                    showFirstButton={true}
                    showLastButton={true}
                    hidePrevButton={false}
                    hideNextButton={false}
                    color="primary"
                  />
                )}
              </Stack>
            </Box>
          </MediaQuery>
        </>
      )}
    </>
  );
};

export default NewsPage;
