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
import { Wrapper, List } from './NoticesCategoryList.styled';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';

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
  const [search] = useSearchParams();
  const query = search.get('query');
  const page = search.get('page');

  useEffect(() => {
    dispatch(getAllFavorites());
    dispatch(getAllUserNotices());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      if (category === categoryShelf[category] && query) {
        dispatch(getNoticeByCategory({ category: category, query, page }));
      }
      if (category === 'favorites-ads' && query) {
        dispatch(getFavorites({ query, page }));
      }
      if (category === 'my-ads' && query) {
        dispatch(getUserNotices({ query, page }));
      } else {
        if (category === categoryShelf[category]) {
          dispatch(getNoticeByCategory({ category: category, query, page }));
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

  // const petsToShow =
  //   category === 'favorites-ads' ? [...favorites] : [...notices];
  // let petsToShow = [];
  // switch (category) {
  //   case 'favorites-ads':
  //     petsToShow = [...favorites];
  //     break;
  //   case 'my-ads':
  //     petsToShow = [...ownPets];
  //     break;
  //   default:
  //     petsToShow = [...notices];
  // }

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
                    query={query}
                    onUpdateStatus={onUpdateStatus}
                    id={notice._id}
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
