import React from 'react';

import newsItems from '../../components/NewsList/news.json';

import { NewsList } from 'components/NewsList/NewsList';
import { Title } from './NewsPage.styled';
const NewsPage = () => {
  return (
    <>
      <Title>News</Title>
      <NewsList news={newsItems} />
    </>
  );
};

export default NewsPage;
