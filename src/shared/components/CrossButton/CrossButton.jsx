import React from 'react';

import { ReactComponent as CrossSmall } from '../../../icons/cross-small.svg';
import { CloseModalBtn } from './CrossButton.styled';

const CrossButton = ({ onClose }) => {
  return (
    <CloseModalBtn type="button" onClick={onClose}>
      <CrossSmall />
    </CloseModalBtn>
  );
};

export default CrossButton;
