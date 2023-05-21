import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { ButtonIconForm } from 'shared/components/ButtonIconForm/ButtonIconForm';
import { FormSearch, InputSearch } from './NoticesSearch.styled';
import NoticesCategoriesNav from '../NoticesCategoriesNav';

const NoticesSearch = ({ onSubmit, onClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter your request, please', {
        icon: '😉',
        style: {
          position: 'top-center',
          duration: 2000,
          autoclose: 1000,
          background: '#54ADFF',
          color: '#fff',
        },
      });
    }
    onSubmit(searchQuery);
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };

  const handleReset = () => {
    setSearchQuery('');
    onClick(searchQuery);
  };

  return (
    <div>
      <FormSearch onSubmit={handleSubmit}>
        <InputSearch
          placeholder="Search"
          onChange={e => handleChange(e)}
          name="searchQuery"
          value={searchQuery}
          type="text"
        />
        <ButtonIconForm searchQuery={searchQuery} onClick={handleReset} />
      </FormSearch>
      <NoticesCategoriesNav />
      <Outlet />
    </div>
  );
};

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoticesSearch;
