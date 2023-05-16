import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import search from '../../../icons/search.svg';
import deleteQuery from '../../../icons/cross-small.svg';
import {
  TitleSearch,
  FormSearch,
  InputSearch,
  ButtonIcon,
  IconSearch
} from './NoticesSearch.styled';
import NoticesCategoriesNav from '../NoticesCategoriesNav';

const NoticesSearch = ({
  value,
  onChange,
  onSubmit,
  onReset,
  searchValue,
}) => {
  
  return (
    <div>
      <FormSearch onSubmit={onSubmit} onReset={onReset}>
        <TitleSearch>Find your favorite pet</TitleSearch>
        <InputSearch
          placeholder="Search"
          onChange={onChange}
          value={value}
          type='text'
        />
                  {!searchValue && (<ButtonIcon type="submit">
            <IconSearch
                            src={search}
              alt="search"
              width="24"
              height="24"
            /></ButtonIcon>
          )}
          {searchValue && (<ButtonIcon type="reset">
            <IconSearch
                           src={deleteQuery}
              alt="delete"
              width="24"
              height="24"
            /> </ButtonIcon>
          )}
             </FormSearch>
      <NoticesCategoriesNav />
      <Outlet />
    </div>
  );
};

NoticesSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default NoticesSearch;
