import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonIconForm } from 'shared/components/ButtonIconForm/ButtonIconForm';
import { FormSearch, InputSearch } from './NoticesSearch.styled';
import NoticesCategoriesNav from '../NoticesCategoriesNav';

const NoticesSearch = ({ value, onChange, onSubmit, onReset, searchValue }) => {
  return (
    <div>
      <FormSearch onSubmit={onSubmit} onReset={onReset}>
        <InputSearch
          placeholder="Search"
          onChange={onChange}
          value={value}
          type="text"
        />
        <ButtonIconForm searchQuery={searchValue} onClick={onReset} />
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
