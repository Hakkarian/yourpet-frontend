// import PropTypes from 'prop-types';

import { Schedule } from '../Schedule/Schedule';
import {
  Item,
  Title,
  Wrap,
  WrapImg,
  Plug,
  WrapInfo,
} from './OurFriendsItem.styled';

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
      <Title>{title}</Title>
      <Wrap>
        <WrapImg>
          <img
            src={imageUrl !== null ? imageUrl : '../../../../icons/.png'}
            alt={`Логотип компаніі ${title}`}
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
            // <button
            //   color={'#54adff'}
            //   hovercolor={'#000000'}
            //   // href="#"
            //   // target="_blank"
            //   // rel="noreferrer noopener"
            //   onClick={workDays => Schedule(workDays)}
            // >
            //   From-To
            // </button>
            <a href={url} target="_blank" rel="noreferrer noopener">
              day and night
            </a>
          )}
          <p>Address:</p>
          {address ? (
            <a
              style={{ height: '48px' }}
              href={addressUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {address}
            </a>
          ) : (
            <a
              style={{ height: '48px' }}
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
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              email only
            </a>
          )}
          {!phone && !email && (
            <a href={url} target="_blank" rel="noreferrer noopener">
              website only
            </a>
          )}
          {phone && (
            <a href={`Tel:${phone}`} target="_blank" rel="noreferrer noopener">
              {phone}
            </a>
          )}
        </WrapInfo>
      </Wrap>
    </Item>
  );
};

// OurFriendsItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   addressUrl: PropTypes.string,
//   imageUrl: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   workDays: PropTypes.string,
//   email: PropTypes.string,
//   phone: PropTypes.string,
// };
