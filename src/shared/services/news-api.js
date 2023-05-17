import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
});

export const getNews = async params => {
  try {
    const response = await instance.get('/news/title', { params });

    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
