import { ImSearch } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';

import { Wrap, ButtonIcon } from './ButtonIconForm.styled';

export const ButtonIconForm = ({ searchQuery, onClick }) => {
  return (
    <Wrap>
      <ButtonIcon
        type="submit"
        color={'#757575'}
        hovercolor={'#54ADFF'}
        style={{ marginRight: '10px' }}
      >
        <ImSearch size={24} hovercolor={'#54ADFF'} />
      </ButtonIcon>
      {searchQuery !== '' && (
        <ButtonIcon
          type="button"
          color="#757575"
          hovercolor="#F43F5E"
          onClick={onClick}
        >
          <RxCross1 size={24} hovercolor={'#F43F5E'} />
        </ButtonIcon>
      )}
    </Wrap>
  );
};
