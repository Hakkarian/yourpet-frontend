import PropTypes from 'prop-types';

import {
  Item,
  Line,
  Wrap,
  Img,
  Title,
  Decsr,
  WrapBottom,
  Date,
  Link,
} from './NewsItem.styled';

const NewsItem = ({ imgUrl, title, text, date, url }) => {
  const transformDate = date => {
    return date.split('T')[0].split('-').reverse().join('/');
  };
  return (
    <Item>
      <Line></Line>
      <Img src={imgUrl} alt={title} loading="lazy" width="280" height="252" />
      <Wrap>
        <Title>{title}</Title>
        <Decsr>{text}</Decsr>
        <WrapBottom>
          <Date>{transformDate(date)}</Date>
          <Link href={url} target="_blank" rel="noreferrer noopener">
            Read more
          </Link>
        </WrapBottom>
      </Wrap>
    </Item>
  );
};

export default NewsItem;

/*{pathSrc ? `${pathImg}${pathSrc}` : NoImageAvailable}*/
NewsItem.propTypes = {
  // _id: PropTypes.string.isRequired,
  // id: PropTypes.string,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
