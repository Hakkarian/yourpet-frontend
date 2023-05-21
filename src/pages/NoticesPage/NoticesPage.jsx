import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { GlobalBox } from './NoticesPage.styled';
import { useState, useEffect } from 'react';
import { changeIsNoticeAdded } from 'redux/notices/notices-slice';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import {
  selectTotalPages,
  selectNoticesByCategory,
} from 'redux/notices/notices-selector';
import { useDispatch } from 'react-redux';
import ReusableTitle from 'shared/components/ReusableTitle';
import { PaginateComponent } from 'shared/components/Pagination/Pagination';

const initialState = { search: '', page: 1 };

const NoticesPage = () => {
  const [state, setState] = useState({ ...initialState });
  const [category] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { search, page } = state;
  const pageQty = useSelector(selectTotalPages);
  const noticesByCategory = useSelector(selectNoticesByCategory);

  useEffect(() => {
    dispatch(
      changeIsNoticeAdded({
        category: category,
        page: page,
        query: searchValue,
      })
    );
  }, [dispatch, category, page, searchValue]);

  const handlerSubmit = value => {
    setSearchParams({ query: value });
    setSearchValue(value);
  };

  // const handlerReset = e => {
  //   e.preventDefault();
  //   // setInput('');
  //   setSearchValue('');
  //   setSearchParams({ query: '' });
  // };

  // const handlerInput = e => {
  //   setInput(e.target.value);
  // };

  const showWarning = () => {
    setState({ search: '' });
  };

  return (
    <GlobalBox>
      <ReusableTitle>Find your favorite pet</ReusableTitle>
      <NoticesSearch onSubmit={handlerSubmit} onClick={showWarning} />
      <NoticesCategoryList onUpdateStatus={noticesByCategory} />
      <Outlet />

      <PaginateComponent
        count={pageQty}
        page={page}
        onChange={(_, num) => {
          setState({ search: search, page: num });
        }}
      />
      <Outlet />
    </GlobalBox>
  );
};

export default NoticesPage;
