import NoticesPage from 'pages/NoticesPage';
import SharedLayout from 'components/SharedLayout';
import MainPage from 'pages/MainPage';
import NewsPage from 'pages/NewsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurFriendsPage from 'pages/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import UserPage from 'pages/UserPage';
import AddPetPage from 'pages/AddPetPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
