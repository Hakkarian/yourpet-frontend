import { useState } from 'react';
// import { toast } from 'react-toastify';

import { ImSearch } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';

import { iconSize } from 'shared/utils/icon.size';
import {
  FormSearch,
  InputSearch,
  ButtonIcon,
  Wrap,
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
      {/* style={{ right: '10px' }} */}
      <Wrap>
        <ButtonIcon type="submit" style={{ marginRight: '10px' }}>
          <ImSearch
            size={iconSize.md}
            style={{
              fill: '#54ADFF',
            }}
          />
        </ButtonIcon>
        {searchQuery !== '' && (
          <ButtonIcon>
            <RxCross1
              size={iconSize.md}
              style={{
                color: '#F43F5E',
              }}
            />
          </ButtonIcon>
        )}
      </Wrap>
    </FormSearch>
  );
};
