import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

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
import { Box, Pagination, Stack } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const NewsPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageQty = useSelector(selectTotalPage);

  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);

  // для вычисления ширины дивайса
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNewsSearchSubmit = value => {
    const nextParams = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <ReusableTitle>News</ReusableTitle>
      <SearchNewsForm onSubmit={handleNewsSearchSubmit} />
      {isLoading && !error && <Loader />}
      {newsItems.length !== 0 && (
        <>
          <NewsList news={newsItems} />

          {/* <Box
            display="flex"
            justifyContent="center"
            pb={windowWidth < 768 ? '20px' : '60px'}
          >
            <Stack spacing={2}>
              {!!pageQty && (
                <Pagination
                  count={pageQty}
                  page={page}
                  onChange={(_, num) => {
                    setSearchParams({ page: num, search });
                  }}
                  showFirstButton={windowWidth < 768 ? false : true}
                  showLastButton={windowWidth < 768 ? false : true}
                  hidePrevButton={windowWidth < 768 ? true : false}
                  hideNextButton={windowWidth < 768 ? true : false}
                  color="primary"
                />
              )}
            </Stack>
          </Box> */}

          {/* <Stack spacing={2}>
            <Pagination count={10} size="small" />
            <Pagination count={10} />
            <Pagination count={10} size="large" />
          </Stack> */}
        </>
      )}
      {!isLoading && newsItems.length === 0 && <p> Such news wasn't found </p>}
    </>
  );
};

export default NewsPage;
