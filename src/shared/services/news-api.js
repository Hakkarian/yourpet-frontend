import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
});

export const getNews = async (page = 1, limit = 6, query = '') => {
  try {
    const response = await instance.get(
      `/news/title?page=${page}&limit=${limit}&search=${query}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

// export const searchNewsByQuery = async (page = 1, limit = 6, query = '') => {
//   try {
//     const response = await instance.get(
//       `/news/title?page=${page}&limit=${limit}&search=${query}`
//     );
//     console.log(response.data);

//     return response.data;
//   } catch (error) {
//     toast.error(error.message);
//   }
// };
