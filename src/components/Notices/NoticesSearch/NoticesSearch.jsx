import React, { useState, useMemo, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { ButtonIconForm } from 'shared/components/ButtonIconForm/ButtonIconForm';
import { FormSearch, InputSearch } from './NoticesSearch.styled';
import { useSearchParams } from 'react-router-dom';

const NoticesSearch = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
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

  useEffect(() => {
    if (params.query === undefined) {
      setSearchQuery('');
    }
  }, [params.query]);

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };

  const handleReset = () => {
    setSearchQuery('');
    onSubmit('');
  };

  return (
    <>
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
    </>
  );
};

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoticesSearch;
