import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'localhost:3030/api',
});

export const getAllNews = async () => {
  const response = await instance.get('/news');
  console.log(response);
  return response;
};

export const searchNewsByQuery = async query => {
  try {
    const response = await instance.get(`/news?query=$(query)`);
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    toast.error(error.message);
  }
};
