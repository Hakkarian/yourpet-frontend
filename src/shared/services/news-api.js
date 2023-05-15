import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getAllNews = async () => {
  try {
    const response = await instance.get('/news');
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

// export const searchNewsByQuery = async query => {
//   try {
//     const response = await instance.get(`/news?query=$(query)`);
//     const responseData = response.data.results;
//     return responseData;
//   } catch (error) {
//     toast.error(error.message);
//   }
// };
