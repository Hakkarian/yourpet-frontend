import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Container } from 'shared/components/Container/Container.styled';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { GlobalBox, Wrapper } from './NoticesPage.styled';
import { useState } from 'react';


const NoticesPage = () => {
  const [input, setInput] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  const [noticeId, setNoticeId] = useState(null)

  const oneNoticeClick = id => {
    // console.log(id)
    setNoticeId(id);
  }

  // console.log(noticeId)

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
          <NoticesCategoryList onClick={oneNoticeClick} />
        </Wrapper>
        <Outlet />
      </Container>
    </GlobalBox>
  );
};

export default NoticesPage;
