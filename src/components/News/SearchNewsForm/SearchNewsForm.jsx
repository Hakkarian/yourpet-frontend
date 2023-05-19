import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// import { ImSearch } from 'react-icons/im';
// import { RxCross1 } from 'react-icons/rx';

import { ButtonIconForm } from 'shared/services/ButtonIconForm/ButtonIconForm';
import {
  FormSearch,
  InputSearch,
  // ButtonIcon,
  // Wrap,
} from './SearchNewsForm.styled';

export const SearchNewsForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Enter your regust');

      //   return toast.error('Enter your regust', {
      //     position: 'top-center',
      //     autoClose: 3000,
      //     theme: 'colored',
      //   });
    }

    onSubmit(searchQuery);
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };

  const handleReset = () => {
    setSearchQuery('');
  };

  return (
    <FormSearch onSubmit={handleSubmit} onReset={handleReset}>
      <InputSearch
        placeholder="Search"
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={e => handleChange(e)}
      />
      <ButtonIconForm searchQuery={searchQuery} />
      {/* <Wrap>
        <ButtonIcon
          type="submit"
          color={'#757575'}
          hoverColor={'#54ADFF'}
          style={{ marginRight: '10px' }}
        >
          <ImSearch size={24} hoverColor={'#54ADFF'} />
        </ButtonIcon>
        {searchQuery !== '' && (
          <ButtonIcon type="reset" color="#757575" hoverColor="#F43F5E">
            <RxCross1 size={24} hoverColor={'#F43F5E'} />
          </ButtonIcon>
        )}
      </Wrap> */}
    </FormSearch>
  );
};
