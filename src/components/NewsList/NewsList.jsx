import React from 'react';

import NewsItem from './NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <List>
      {news.map(({ _id, id, imgUrl, title, text, date, url }) => (
        <NewsItem
          key={_id}
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
