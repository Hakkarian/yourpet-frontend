import { ImSearch } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';

import { Wrap, ButtonIcon } from './ButtonIconForm.styled';

export const ButtonIconForm = ({ searchQuery }) => {
  return (
    <Wrap>
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
    </Wrap>
  );
};
