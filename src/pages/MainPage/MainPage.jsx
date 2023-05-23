import React from 'react';
import MediaQuery from 'react-responsive';
import { useContext } from 'react';
import { ThemeContext } from 'shared/utils/ThemeContext/themeProvider';

import { SectionTag } from './MainPage.styled';
import ThemeSwitcher from 'shared/utils/ThemeContext/ThemeSwitcher/ThemeSwitcher';

const MainPage = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <SectionTag>
      <div>
        <MediaQuery minWidth={1280}>
          <ThemeSwitcher isLight={isLight} onClick={toggleTheme}/>
        </MediaQuery>
      </div>
      <h1>Take good care of your small pets</h1>
      <div className='bg_div'>
      </div>
    </SectionTag>
  );
};

export default MainPage;
