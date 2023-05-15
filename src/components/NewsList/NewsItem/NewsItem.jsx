// import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  Item,
  Line,
  WrapImg,
  Img,
  Title,
  Decsr,
  WrapBottom,
  Date,
  Link,
} from './NewsItem.styled';

const NewsItem = ({ imgUrl, title, text, date, url }) => {
  return (
    <Item>
      <div>
        <Line />
        <WrapImg>
          <Img
            src=/*{pathSrc ? `${pathImg}${pathSrc}` : NoImageAvailable}*/ {
              imgUrl
            }
            alt={title}
            loading="lazy"
            width="280"
            height="252"
          />
        </WrapImg>
      </div>
      <div
        className={css`
          padding: 0 12px 12px;
        `}
      >
        <Title>{title}</Title>
        <Decsr>{text}</Decsr>
        <WrapBottom>
          <Date>{date}</Date>
          <Link href={url} target="_blank" rel="noreferrer noopener">
            Read more
          </Link>
        </WrapBottom>
      </div>
    </Item>
  );
};

export default NewsItem;

// FriendListItem.propTypes = {
//   isOnline: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
