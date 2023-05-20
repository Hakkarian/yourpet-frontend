import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { GlobalBox } from './NoticesPage.styled';
import { useState, useEffect } from 'react';
import { changeIsNoticeAdded } from 'redux/notices/notices-slice';
import { getNoticeByCategory } from 'redux/notices/notices-operations';
import { selectTotalPages, selectIsError, selectIsLoading, selectNoticesByCategory } from 'redux/notices/notices-selector';
import { useDispatch } from 'react-redux';
import ReusableTitle from 'shared/components/ReusableTitle';
import { PaginateComponent } from 'shared/components/Pagination/Pagination';

const initialState = { search: '', page: 1 };

const NoticesPage = () => {
   const [searchValue, setSearchValue] = useState('');
   const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
    const [state, setState] = useState({ ...initialState });
    const { search, page } = state;
    // const noticesItems = useSelector(selectNoticesByCategory);
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectIsError);
    const pageQty = useSelector(selectTotalPages);

   useEffect(() => {
     dispatch(changeIsNoticeAdded());
   }, [dispatch]);

   const handlerSubmit = e => {
     e.preventDefault();
     setSearchParams({ query: state });
     setSearchValue(state);
   };

   const handlerReset = e => {
     e.preventDefault();
     setState('');
     setSearchValue('');
     setSearchParams({ query: '' });
   };

   const handlerInput = e => {
     setState(e.target.value);
   };

return (
  <GlobalBox>
    <ReusableTitle>Find your favorite pet</ReusableTitle>
    <NoticesSearch
      value={state}
      onChange={handlerInput}
      onSubmit={handlerSubmit}
      onReset={handlerReset}
      searchValue={searchValue.trim()}
    />
    <NoticesCategoryList />
    <Outlet />

    <PaginateComponent
      count={pageQty}
      page={page}
      onChange={(_, num) => {
        setState({ search: search, page: num });
      }}
    />
  </GlobalBox>
);
};

export default NoticesPage;
