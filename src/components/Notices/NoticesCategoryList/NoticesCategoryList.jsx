import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import NoticeCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { Loader } from '../../Loader/Loader';
import operations from 'redux/notices/notices-operations';
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
  'in-good-hands': 'in-good-hands',
};

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const notices = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isNoticeAdded = useSelector(selectIsNoticeAdded);
  const user = useSelector(selectUser);
  const category = location.pathname.split('/')[2];
  const [search, setSearch] = useSearchParams();
  const query = search.get('query');
  const page = search.get('page');

  let isFavorite = false;

  useEffect(() => {
    if (category) {
      if (category === categoryShelf[category] && query) {
        dispatch(
          operations.getNoticesByCategory({ category: category, query, page })
        );
      }
      if (category === 'favorites-ads' && query) {
        dispatch(operations.getFavorites({ query, page }));
      }
      if (category === 'my-ads' && query) {
        dispatch(operations.getUserNotices({ query, page }));
      } else {
        if (category === categoryShelf[category]) {
          dispatch(
            operations.getNoticesByCategory({ category: category, query, page })
          );
        }
        if (category === 'favorites-ads') {
          dispatch(operations.getFavorites({ query, page }));
        }
        if (category === 'my-ads') {
          dispatch(operations.getUserNotices({ query, page }));
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
                    category={category}
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
