import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import NoticeCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { Loader } from '../../Loader/Loader';
import {
  getNoticeByCategory,
  getFavorites,
  getUserNotices,
  getAllFavorites,
  getAllUserNotices,
} from 'redux/notices/notices-operations';
import {
  selectNoticesByCategory,
  selectIsLoading,
  selectIsNoticeAdded,
  selectIsFavorite,
} from 'redux/notices/notices-selector';
import { selectUser, selectIsLoggedIn } from 'redux/auth/auth-selector';
import { List } from './NoticesCategoryList.styled';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import { Container } from 'shared/components/Container/Container.styled';

export const categoryShelf = {
  sell: 'sell',
  'lost-found': 'lost-found',
  'for-free': 'for-free',
};

const NoticesCategoryList = ({ onClick, onUpdateStatus }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const notices = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isNoticeAdded = useSelector(selectIsNoticeAdded);
  const user = useSelector(selectUser);
  let favoriteNotice = useSelector(selectIsFavorite);
  const category = location.pathname.split('/')[2];
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllFavorites());
      dispatch(getAllUserNotices());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (category) {
      if (category === categoryShelf[category] && search) {
        dispatch(getNoticeByCategory({ category: category, search, page }));
      }
      if (category === 'favorites-ads' && search) {
        dispatch(getFavorites({ search, page }));
      }
      if (category === 'my-ads' && search) {
        dispatch(getUserNotices({ search, page }));
      } else {
        if (category === categoryShelf[category]) {
          dispatch(getNoticeByCategory({ category: category, search, page }));
        }
        if (category === 'favorites-ads') {
          dispatch(getFavorites({ search, page }));
        }
        if (category === 'my-ads') {
          dispatch(getUserNotices({ search, page }));
        }
      }
    }
  }, [search, dispatch, category, isNoticeAdded, page]);

  return !isLoading && notices.length === 0 ? (
    <Container>
      <ErrorPage />
    </Container>
  ) : (
    <Container>
      {notices && notices.length > 0 ? (
                 <List>
            {!isLoggedIn &&
              notices.map(notice => (
                <NoticeCategoryItem
                  key={notice._id}
                  notice={notice}
                  page={page}
                  categoryPet={category}
                  onClick={() => onClick(notice._id)}
                  onUpdateStatus={onUpdateStatus}
                  id={notice._id}
                />
              ))}

            {isLoggedIn &&
              notices.map(notice => {
                const isOwner = notice.owner._id === user.id;
                const index = notice.favorite.indexOf(user.id);

                if (index > -1) {
                  favoriteNotice = true;
                } else favoriteNotice = false;

                return (
                  <NoticeCategoryItem
                    key={notice._id}
                    notice={notice}
                    isFavorite={favoriteNotice}
                    isOwner={isOwner}
                    categoryPet={category}
                    page={page}
                    search={search}
                    onUpdateStatus={onUpdateStatus}
                    id={notice._id}
                  />
                );
              })}
          </List>
         ) : (
        <Loader />
      )}
    </Container>
  );
};

export default NoticesCategoryList;
