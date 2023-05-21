import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { GlobalBox } from './NoticesPage.styled';
import { useState, useEffect } from 'react';
import { changeIsNoticeAdded } from 'redux/notices/notices-slice';
// import { getNoticeByCategory } from 'redux/notices/notices-operations';
import { selectTotalPages } from 'redux/notices/notices-selector';
import { useDispatch } from 'react-redux';
import ReusableTitle from 'shared/components/ReusableTitle';
import { PaginateComponent } from 'shared/components/Pagination/Pagination';

const NoticesPage = () => {
  const [input, setInput] = useState('');
  // const [state, setState] = useState({ ...initialState });
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { search, page } = input;
  const pageQty = useSelector(selectTotalPages);

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
      <ReusableTitle>Find your favorite pet</ReusableTitle>
      <NoticesSearch
        value={input}
        onChange={handlerInput}
        onSubmit={handlerSubmit}
        onReset={handlerReset}
        searchValue={searchValue.trim()}
      />
      <NoticesCategoryList onUpdateStatus={handlerSubmit} />
   

      <PaginateComponent
        count={pageQty}
        page={page}
        onChange={(_, num) => {
          setInput({ search: search, page: num });
        }}
      />
      <Outlet />
    </GlobalBox>
  );
};

export default NoticesPage;
