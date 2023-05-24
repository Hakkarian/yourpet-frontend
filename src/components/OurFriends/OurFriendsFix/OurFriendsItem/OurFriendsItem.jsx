import PropTypes from 'prop-types';

import { Schedule } from '../Schedule/Schedule';
import { Item, Title, Wrap, WrapImg, WrapInfo } from './OurFriendsItem.styled';

export const OurFriendsItem = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  workDays,
  phone,
  email,
}) => {
  return (
    <Item>
      <Title href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </Title>
      <Wrap>
        <WrapImg>
          <img
            src={
              imageUrl !== null
                ? imageUrl
                : 'https://i.ibb.co/kqpsyG0/cat-baby-787084-640.jpg'
            }
            alt={`Логотип компанії ${title}`}
            loading="lazy"
            width="280"
            height="252"
          />
        </WrapImg>
        <WrapInfo>
          <p>Time:</p>
          {workDays?.length ? (
            <Schedule workDays={workDays} />
          ) : (
            <p className="time">day and night</p>
          )}
          <p>Address:</p>
          {address ? (
            <a href={addressUrl} target="_blank" rel="noreferrer noopener">
              {address}
            </a>
          ) : (
            <a
              style={{ height: '32px' }}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              website only
            </a>
          )}
          <p>Email:</p>
          {!email ? (
            <a href={url} target="_blank" rel="noreferrer noopener">
              website only
            </a>
          ) : (
            <a
              style={{ fontSize: '11px' }}
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {email}
            </a>
          )}
          <p>Phone:</p>
          {!phone && email && (
            <a
              style={{ marginBottom: 0 }}
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              email only
            </a>
          )}
          {!phone && !email && (
            <a
              style={{ marginBottom: 0 }}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              website only
            </a>
          )}
          {phone && (
            <a
              style={{ marginBottom: 0 }}
              href={`Tel:${phone}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {phone}
            </a>
          )}
        </WrapInfo>
      </Wrap>
    </Item>
  );
};

OurFriendsItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  addressUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      from: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  email: PropTypes.string,
  phone: PropTypes.string,
};
