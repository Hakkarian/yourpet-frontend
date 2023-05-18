import React from 'react';

import { SectionTag } from './MainPage.styled';

const a = {
  func: value => value * 4,
};

const b = a.func(2);

console.log(b);

const MainPage = () => {
  return (
    <SectionTag>
      <h1>Take good care of your small pets</h1>
      <div></div>
    </SectionTag>
  );
};

export default MainPage;
