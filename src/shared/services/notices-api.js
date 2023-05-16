import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

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

