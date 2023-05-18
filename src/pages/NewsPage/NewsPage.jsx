import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
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
import { Box, Pagination, Stack } from '@mui/material';

const NewsPage = () => {
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

          {/* Пагінація */}
          <MediaQuery maxWidth={767}>
            <Box display="flex" justifyContent="center" pb="30px" pt="60px">
              <Stack spacing={2}>
                {!!pageQty && (
                  <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => {
                      setSearchParams({ page: num, search });
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
                      setSearchParams({ page: num, search });
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
          {/* Кінець пагінації */}
        </>
      )}

      {!isLoading && newsItems.length === 0 && <p> Such news wasn't found </p>}
    </>
  );
};

export default NewsPage;
