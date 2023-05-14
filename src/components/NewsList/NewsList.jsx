import React from 'react';

import NewsItem from './NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  console.log(news);
  return (
    <List>
      {news.map(({ id, imgUrl, title, text, date, url }) => (
        <NewsItem
          key={id}
          id={id}
          img={imgUrl}
          title={title}
          text={text}
          date={date}
          url={url}
        />
      ))}
    </List>
  );
};
