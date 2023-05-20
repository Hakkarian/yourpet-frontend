import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CrossIcon } from '../../../icons/cross-small.svg';
import { CloseModalBtn } from './CrossButton.styled';

const CrossButton = (props) => {
  // const { onClick } = props;

  return (
  
    <CloseModalBtn {...props} type="button">
      <CrossIcon stroke="#54ADFF"  width="20" height="20"/>
    </CloseModalBtn> 
 );
};

CrossButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CrossButton;
//  onClick={onClick}