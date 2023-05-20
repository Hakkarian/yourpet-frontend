import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Container } from 'shared/components/Container/Container.styled';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { GlobalBox, Wrapper } from './NoticesPage.styled';
import { useState, useEffect } from 'react';
import { changeIsNoticeAdded } from 'redux/notices/notices-slice';
import { useDispatch } from 'react-redux';


const NoticesPage = () => {
  const [input, setInput] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIsNoticeAdded());
  }, [dispatch]);

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
      </Container>
    </GlobalBox>
  );
};

export default NoticesPage;
