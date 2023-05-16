import React from 'react';

import { ReactComponent as CrossIcon } from '../../../icons/cross-small.svg';
import { CloseModalBtn } from './CrossButton.styled';

const CrossButton = ({ onClick }) => {
  return (
    <CloseModalBtn type="button" onClick={onClick}>
      <CrossIcon stroke="#54ADFF" width="14px" height="14px" />
    </CloseModalBtn>
  );
};

export default CrossButton;
