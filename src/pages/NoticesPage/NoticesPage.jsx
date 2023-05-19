import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'shared/components/Container/Container.styled';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { GlobalBox, Wrapper } from './NoticesPage.styled';
import { useState, useEffect } from 'react';
import { changeIsNoticeAdded } from 'redux/notices/notices-slice';
import { selectTotalPages } from 'redux/notices/notices-selector';
import { useDispatch } from 'react-redux';
import { Box, Pagination, Stack } from '@mui/material';
import MediaQuery from 'react-responsive';

const NoticesPage = () => {
  const [input, setInput] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') ?? '';
  const pageQty = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(changeIsNoticeAdded({ page, search }));
  }, [dispatch, page, search]);

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input });
    setSearchValue(input);
  };

  const handlerReset = e => {
    e.preventDefault();
    setInput('');
    setSearchValue('');
    setSearchParams({ query: '' });
  };

  const handlerInput = e => {
    setInput(e.target.value);
  };

  return (
    <GlobalBox>
      <Container>
        <Wrapper>
          <NoticesSearch
            value={input}
            onChange={handlerInput}
            onSubmit={handlerSubmit}
            onReset={handlerReset}
            searchValue={searchValue.trim()}
          />
          <NoticesCategoryList />
        </Wrapper>
        <Outlet />

           <MediaQuery maxWidth={767}>
            <Box display="flex" justifyContent="center" pb="20px" pt="30px">
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

      </Container>
    </GlobalBox>
  );
};

export default NoticesPage;
