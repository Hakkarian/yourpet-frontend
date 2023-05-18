import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import NoticeCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { Loader } from '../../Loader/Loader';
import {
    getNoticeByCategory,
    getFavorites,
   getUserNotices,
} from 'redux/notices/notices-operations';
import {
  selectNoticesByCategory,
  selectIsLoading,
  selectIsNoticeAdded,
} from 'redux/notices/notices-selector';
import { selectUser, selectIsLoggedIn } from 'redux/auth/auth-selector';
import { Wrapper, List } from './NoticesCategoryList.styled';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';

const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'for-free': 'for-free',
};

const NoticesCategoryList = ({onClick}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const notices = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isNoticeAdded = useSelector(selectIsNoticeAdded);
  const user = useSelector(selectUser);
  const category = location.pathname.split('/')[2];
  const [search] = useSearchParams();
  const query = search.get('query');
  const page = search.get('page');

  let isFavorite = false;

  // console.log(notices)

  useEffect(() => {
    if (category) {
      if (category === categoryShelf[category] && query) {
        dispatch(
          getNoticeByCategory({ category: category, query, page })
        );
      }
      if (category === 'favorites-ads' && query) {
        dispatch(getFavorites({ query, page }));
      }
      if (category === 'my-ads' && query) {
        dispatch(getUserNotices({ query, page }));
      } else {
        if (category === categoryShelf[category]) {
          dispatch(
            getNoticeByCategory({ category: category, query, page })
          );
        }
        if (category === 'favorites-ads') {
          dispatch(getFavorites({ query, page }));
        }
        if (category === 'my-ads') {
          dispatch(getUserNotices({ query, page }));
        }
      }
    }
  }, [query, dispatch, category, isNoticeAdded, page]);

  return !isLoading && notices.length === 0 ? (
    <Wrapper>
      <ErrorPage />
    </Wrapper>
  ) : (
    <Wrapper>
      {notices && notices.length > 0 ? (
        <>
          <List>
            {!isLoggedIn &&
              notices.map(notice => (
                <NoticeCategoryItem
                  key={notice._id}
                  notice={notice}
                  page={page}
                  onClick={() => onClick(notice._id)}
                />
              ))}

            {isLoggedIn &&
              notices.map(notice => {
                const isOwner = notice.owner._id === user.id;
                const index = notice.favorite.indexOf(user.id);

                if (index > -1) {
                  isFavorite = true;
                } else isFavorite = false;

                return (
                  <NoticeCategoryItem
                    key={notice._id}
                    notice={notice}
                    isFavorite={isFavorite}
                    isOwner={isOwner}
                    categoryPet={category}
                  />
                );
              })}
          </List>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default NoticesCategoryList;
