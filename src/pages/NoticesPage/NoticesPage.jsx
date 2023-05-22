import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';
import { useState, useEffect } from 'react';
import { changeIsNoticeAdded } from 'redux/notices/notices-slice';
import {
  selectTotalPages,
  selectNoticesByCategory,
} from 'redux/notices/notices-selector';
import { useDispatch } from 'react-redux';
import ReusableTitle from 'shared/components/ReusableTitle';
import { PaginateComponent } from 'shared/components/Pagination/Pagination';

const NoticesPage = () => {
  const [category] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const noticesByCategory = useSelector(selectNoticesByCategory);
  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') ?? '';
  const pageQty = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(
      changeIsNoticeAdded({
        category: category,
        page: page,
        search: search,
      })
    );
  }, [dispatch, category, page, search]);

  const handlerSubmit = value => {
    const nextParams = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
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
    setSearchParams({ search: '' });
  };

  return (
    <>
      <ReusableTitle>Find your favorite pet</ReusableTitle>
      <NoticesSearch onSubmit={handlerSubmit} onClick={showWarning} />
      <NoticesCategoryList onUpdateStatus={noticesByCategory} />

      <PaginateComponent
        count={pageQty}
        page={page}
        onChange={(_, num) => {
          setSearchParams({ search: search, page: num });
        }}
      />
    </>
  );
};

export default NoticesPage;
