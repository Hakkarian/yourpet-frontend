import SharedLayout from 'components/SharedLayout';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';
import { refreshUser } from 'redux/auth/auth-operations';
import { lazy, useEffect } from 'react';
import { Loader } from 'components/Loader';
// import PrivateView from 'views/PrivateView';
// import RestrictedView from 'views/RestrictedView';
import { Toaster } from 'react-hot-toast';

const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const isLogin = useSelector(selectIsLoggedIn)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isRefreshing ? (
    <Loader />
  ) : (
      <>
        <div><Toaster /></div>
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
          <Route path="/add-pet" element={<AddPetPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
