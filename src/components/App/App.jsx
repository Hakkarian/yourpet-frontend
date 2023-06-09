import SharedLayout from 'components/SharedLayout';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';
import { refreshUser } from 'redux/auth/auth-operations';
import { lazy, useEffect } from 'react';
import { Loader } from 'components/Loader';
import { Toaster } from 'react-hot-toast';
import PrivateView from 'views/PrivateView';
import RestrictedView from 'views/RestrictedView';
import { setGoogleUser } from 'redux/auth/auth-slice';

const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
// const OurFriendsPage = lazy(() => import('pages/OurFriendsPage-Alex'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams({})

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const userId = searchParams.get('userId');
    const name = searchParams.get('name');
    const avatar = searchParams.get('avatar');
    if (token) {
      const payload = {
        token,
        user: {
          email, userId, name, avatar
        }
      }
      dispatch(setGoogleUser(payload))
      searchParams.delete('token');
      searchParams.delete('email');
      searchParams.delete('userId');
      searchParams.delete('name');
      searchParams.delete('avatar');
      setSearchParams(searchParams)
    }
  }, [dispatch, searchParams, setSearchParams])

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isRefreshing ? (
    <Loader marginTop="30px" />
  ) : (
    <>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/notices">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route element={<RestrictedView />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateView />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
