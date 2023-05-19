import React from 'react';

import NewsItem from './NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  const sortedNews = [...news].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );
  return (
    <List>
      {sortedNews.map(({ _id, imgUrl, title, text, date, url }) => (
        <NewsItem
          key={_id}
          imgUrl={imgUrl}
          title={title}
          text={text}
          date={date}
          url={url}
        />
      ))}
    </List>
  );
};
