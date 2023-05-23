import { ImSearch } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';

import { Wrap, ButtonIcon } from './ButtonIconForm.styled';

export const ButtonIconForm = ({ searchQuery, onClick }) => {
  return (
    <Wrap>
      <ButtonIcon
        type="submit"
        color="#54ADFF"
        fill="#54ADFF"
        style={{ marginRight: '10px' }}
      >
        <ImSearch size={24} />
      </ButtonIcon>

      {searchQuery !== '' && (
        <ButtonIcon
          type="button"
          color="#F43F5E"
          fill="#F43F5E"
          onClick={onClick}
        >
          <RxCross1 size={24} />
        </ButtonIcon>
      )}
    </Wrap>
  );
};
