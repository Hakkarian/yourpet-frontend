// import axios from 'axios';
import { toast } from 'react-toastify';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });

import { instance } from './auth-api';
// instance.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjNkNzdlZDI0MWU1M2YyNWM0Y2ZjYiIsImlhdCI6MTY4NDI2NDg0MCwiZXhwIjoxNjg2ODU2ODQwfQ.QriSZSrYZ-Fj-QJKL2GJqCPmN4i2BG-x1bBNwiSBy9Y`;

export const getNotices = async ( searchString = '') => {
  const url = `/notices/title/search/:category${
    searchString.trim() ? `?searchQuery=${searchString}` : ''
  }`;

  try {
   const response = await instance.get(url);
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    toast.error(error.message);
  }
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/notices', data);
  return result;
};

export const getNoticesByCategory = async (category, page, query) => {
  try {
    if (query === null) {
    const response = await instance.get(`/notices/${category}`, {
      params: { page },
    });
        return response.data;
  }
    else {
        const response = await instance.get(
          `/notices/title/search/${category}?query=${query}`
        );
        return response.data;
  }
  } catch (error) {
    toast.error(error.message);
  }
};



